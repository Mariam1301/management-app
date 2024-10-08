import { Component, OnInit } from '@angular/core';
import { EntityManagementService } from '../../services/entity-management/entity-management.service';
import {
  EntityTypeEnum,
  EntityModel,
  EntityStockStatusEnum,
} from '../../services/entity-management/entity-management.model';
import UiPaginationDataSource from '../../components/data-source/pagination-data-source';
import UiDatasourceCreator from '../../components/data-source/data-source-creator';

@Component({
  templateUrl: './ingredients-page.component.html',
})
export class IngredientsPageComponent implements OnInit {
  isIngredientDialogVisible = false;

  selectedIngredient!: Partial<EntityModel>;

  ingredientsDataSource!: UiPaginationDataSource;

  entityStockStatus = EntityStockStatusEnum;

  constructor(
    private readonly _entityManagementService: EntityManagementService,
    private readonly _dsCreator: UiDatasourceCreator
  ) {}

  ngOnInit(): void {
    this.ingredientsDataSource = this._dsCreator.createWithPagination(
      (pageNumber, pageSize, filter) =>
        this._entityManagementService.getAllIngredients(
          pageNumber,
          pageSize,
          filter
        )
    );
  }

  onRowClick(ingredient: EntityModel) {
    this.isIngredientDialogVisible = true;
    this.selectedIngredient = { ...ingredient };
  }

  onAddClick() {
    this.isIngredientDialogVisible = true;
    this.selectedIngredient = {};
  }

  onSaveClick(ingredient: EntityModel) {
    ingredient.id
      ? this._entityManagementService
          .updateIngredient(ingredient)
          .subscribe(() => this.ingredientsDataSource.refresh())
      : this._entityManagementService
          .addEntity({
            ...ingredient,
            type: EntityTypeEnum.Ingredient,
          })
          .subscribe(() => this.ingredientsDataSource.fetchSpecificPage(1));

    this.isIngredientDialogVisible = false;
  }

  onDeleteClick(ingredient: EntityModel) {
    this._entityManagementService
      .deleteEntity(ingredient.id)
      .subscribe(() => this.ingredientsDataSource.refresh());
  }
}
