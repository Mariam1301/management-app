import { Component } from '@angular/core';
import {
  EntityModel,
  EntityTypeEnum,
} from '../../services/entity-management/entity-management.model';
import { EntityManagementService } from '../../services/entity-management/entity-management.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dishes-page.component.html',
})
export class DishesPageComponent {
  dishes!: EntityModel[];

  isDialogVisible = false;

  selectedDish!: Partial<EntityModel>;

  dishesCount = 0;
  constructor(
    private readonly _entityManagementService: EntityManagementService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.fetchDishes();
  }

  onRowClick(dish: EntityModel) {
    this._router.navigate(['dishes', 'details'], {
      queryParams: { id: dish?.id },
    });
  }

  onAddClick() {
    this.isDialogVisible = true;
    this.selectedDish = {};
  }

  onSaveClick(dish: EntityModel) {
    this.isDialogVisible = false;
    !dish.id &&
      this._entityManagementService
        .addEntity({
          ...dish,
          type: EntityTypeEnum.Dish,
        })
        .subscribe(({ id }) => {
          this._router.navigate(['dishes', 'details'], {
            queryParams: { id },
          });
        });
  }

  onDeleteClick(dish: EntityModel) {
    this._entityManagementService
      .deleteEntity(dish.id)
      .subscribe(() => this.fetchDishes());
  }

  fetchDishes() {
    this._entityManagementService.getDishes().subscribe((dishes) => {
      this.dishes = dishes;
      this.dishesCount = dishes?.length;
    });
  }
}
