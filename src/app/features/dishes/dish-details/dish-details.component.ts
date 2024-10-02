import { Component, DestroyRef } from '@angular/core';
import {
  Dish,
  IngredientRecord,
} from '../../../services/entity-management/entity-management.model';
import { EntityManagementService } from '../../../services/entity-management/entity-management.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  templateUrl: './dish-details.component.html',
})
export class DishDetailsComponent {
  dishId!: number;

  dish: Partial<Dish> = {};

  isDialogVisible = false;

  selectedIngredientIndex?: number;

  editMode = false;

  dishForm: Partial<Dish> = {};
  constructor(
    private readonly _entityService: EntityManagementService,
    private readonly _route: ActivatedRoute,
    private readonly _destroyRef: DestroyRef
  ) {}
  ngOnInit(): void {
    this.dishId = Number(this._route.snapshot?.queryParamMap?.get('id'));
    this._route.data
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((data) => (this.dish = data['details']));
  }

  onAddClick() {
    this.selectedIngredientIndex = undefined;
    this.isDialogVisible = true;
  }

  onDeleteClick(index: number) {
    this.dishForm.ingredients?.splice(index, 1);
  }

  onRowClick(index: number) {
    this.isDialogVisible = true;
    this.selectedIngredientIndex = index;
  }

  onRecordSaveClick(record: IngredientRecord) {
    this.isDialogVisible = false;

    if (this.selectedIngredientIndex !== undefined) {
      (this.dishForm.ingredients || [])[this.selectedIngredientIndex] = {
        ...(this.dishForm.ingredients || [])[this.selectedIngredientIndex],
        ...record,
      };
    } else {
      this.dishForm.ingredients?.unshift(record);
    }

    this.selectedIngredientIndex = undefined;
  }

  fetchSale(dishId: number) {
    this._entityService.getDish(dishId).subscribe((data) => (this.dish = data));
  }

  onSaveClick() {
    this._entityService
      .updateDish({
        ...this.dishForm,
        ingredients: this.dishForm.ingredients?.map((ingredient) => ({
          id: ingredient.id,
          measurement_amount: ingredient.measurement_amount,
          measurement_type: ingredient.measurement_type,
        })),
      })
      .pipe(switchMap(() => this._entityService.getDish(this.dishId)))
      .subscribe((data) => {
        this.dish = data;
        this.editMode = false;
        this.dishForm = {};
      });
  }

  onEditSaleClick() {
    this.editMode = true;
    this.dishForm = { ...this.dish };
  }
}
