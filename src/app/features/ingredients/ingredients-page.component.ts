import { Component, OnInit } from '@angular/core';
import { EntityManagementService } from '../../services/entity-management/entity-management.service';
import {
  EntityTypeEnum,
  EntityModel,
} from '../../services/entity-management/entity-management.model';

@Component({
  templateUrl: './ingredients-page.component.html',
})
export class IngredientsPageComponent implements OnInit {
  ingredients!: EntityModel[];

  isIngredientDialogVisible = false;

  selectedIngredient!: Partial<EntityModel>;

  ingredientsCount = 0;
  constructor(
    private readonly _entityManagementService: EntityManagementService
  ) {}

  ngOnInit(): void {
    this.fetchIngredients();
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
    let stream$ = ingredient.id
      ? this._entityManagementService.updateIngredient(ingredient)
      : this._entityManagementService.addEntity({
          ...ingredient,
          type: EntityTypeEnum.Ingredient,
        });

    this.isIngredientDialogVisible = false;
    stream$.subscribe(() => this.fetchIngredients());
  }

  onDeleteClick(ingredient: EntityModel) {
    this._entityManagementService
      .deleteEntity(ingredient.id)
      .subscribe(() => this.fetchIngredients());
  }

  fetchIngredients() {
    this._entityManagementService
      .getAllIngredients()
      .subscribe((ingredients) => {
        this.ingredients = ingredients;
        this.ingredientsCount = ingredients?.length;
      });
  }
}
