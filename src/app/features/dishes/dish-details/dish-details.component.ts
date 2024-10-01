import { Component, DestroyRef } from '@angular/core';
import {
  Dish,
  EntityModel,
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

  selectedIngredient?: Partial<IngredientRecord>;

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
      .subscribe((data) => {
        this.dish = data['details'];
        console.log(data['details']);
      });
  }

  onAddClick() {
    this.isDialogVisible = true;
  }

  onDeleteClick(index: number) {
    this.dishForm.ingredients?.splice(index, 1);
  }

  onRowClick(record: IngredientRecord) {
    this.isDialogVisible = true;
    this.selectedIngredient = { ...record };
  }

  onRecordSaveClick(record: IngredientRecord) {
    this.isDialogVisible = false;

    const index =
      this.dishForm.ingredients?.findIndex(
        (ingredient) => ingredient?.id === record.id
      ) || 0;

    if (index !== -1) {
      (this.dishForm.ingredients || [])[index] = {
        ...(this.dishForm.ingredients || [])[index],
        ...record,
      };
    } else {
      this.dishForm.ingredients?.push(record);
    }

    this.selectedIngredient = undefined;
  }

  fetchSale(dishId: number) {
    this._entityService.getDish(dishId).subscribe((data) => (this.dish = data));
  }

  onSaveClick() {
    this._entityService
      .updateDish(this.dishForm)
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
