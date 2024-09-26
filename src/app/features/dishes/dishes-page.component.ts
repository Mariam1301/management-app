import { Component } from '@angular/core';
import {
  Dish,
  EntityTypeEnum,
} from '../../services/entity-management/entity-management.model';
import { EntityManagementService } from '../../services/entity-management/entity-management.service';

@Component({
  templateUrl: './dishes-page.component.html',
})
export class DishesPageComponent {
  dishes!: Dish[];

  isDialogVisible = false;

  selectedDish!: Partial<Dish>;

  dishesCount = 0;
  constructor(
    private readonly _entityManagementService: EntityManagementService
  ) {}

  ngOnInit(): void {
    this.fetchDishes();
  }

  onRowClick(dish: Dish) {
    this.isDialogVisible = true;
    this.selectedDish = { ...dish };
  }

  onAddClick() {
    this.isDialogVisible = true;
    this.selectedDish = {};
  }

  onSaveClick(dish: Dish) {
    this.isDialogVisible = false;
    !dish.id &&
      this._entityManagementService
        .addEntity({
          ...dish,
          type: EntityTypeEnum.Dish,
        })
        .subscribe(() => this.fetchDishes());
  }

  onDeleteClick(dish: Dish) {
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
