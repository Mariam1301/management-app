import { Component, OnInit } from '@angular/core';
import { EntityManagementService } from '../../services/entity-management/entity-management.service';
import {
  EntityTypeEnum,
  Ingredient,
} from '../../services/entity-management/entity-management.model';

@Component({
  templateUrl: './ingredients-page.component.html',
})
export class IngredientsPageComponent implements OnInit {
  ingredients!: Ingredient[];

  isIngredientDialogVisible = false;

  selectedIngredient!: Partial<Ingredient>;

  ingredientsCount = 0;
  constructor(
    private readonly _entityManagementService: EntityManagementService
  ) {}

  ngOnInit(): void {
    this.fetchIngredients();
  }

  onRowClick(ingredient: Ingredient) {
    this.isIngredientDialogVisible = true;
    this.selectedIngredient = { ...ingredient };
  }

  onAddClick() {
    this.isIngredientDialogVisible = true;
    this.selectedIngredient = {};
  }

  onSaveClick(ingredient: Ingredient) {
    // let stream$ = ingredient.id?this.
    this.isIngredientDialogVisible = false;
    !ingredient.id &&
      this._entityManagementService
        .addEntity({
          ...ingredient,
          type: EntityTypeEnum.Ingredient,
        })
        .subscribe(() => this.fetchIngredients());
  }

  onDeleteClick(ingredient: Ingredient) {
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
