import { Component } from '@angular/core';
import {
  EntityModel,
  EntityStockStatusEnum,
  EntityTypeEnum,
} from '../../services/entity-management/entity-management.model';
import { EntityManagementService } from '../../services/entity-management/entity-management.service';
import { Router } from '@angular/router';
import UiPaginationDataSource from '../../components/data-source/pagination-data-source';
import UiDatasourceCreator from '../../components/data-source/data-source-creator';

@Component({
  templateUrl: './dishes-page.component.html',
})
export class DishesPageComponent {
  isDialogVisible = false;

  selectedDish!: Partial<EntityModel>;

  dishesDataSource!: UiPaginationDataSource;

  entityStockStatus = EntityStockStatusEnum;

  constructor(
    private readonly _entityManagementService: EntityManagementService,
    private readonly _router: Router,
    private readonly _dsCreator: UiDatasourceCreator
  ) {}

  ngOnInit(): void {
    this.dishesDataSource = this._dsCreator.createWithPagination(
      (pageNumber, pageSize, filter) =>
        this._entityManagementService.getDishes(pageNumber, pageSize, filter)
    );
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
      .subscribe(() => this.dishesDataSource?.refresh());
  }
}
