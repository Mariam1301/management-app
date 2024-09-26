import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Ingredient,
  MeasurementTypes,
} from '../../../services/entity-management/entity-management.model';

@Component({
  selector: 'ingredient-dialog',
  templateUrl: './ingredient.component.html',
})
export class IngredientComponent {
  @Input()
  ingredient: Partial<Ingredient> = {};

  @Output()
  saveClicked = new EventEmitter<Ingredient>();

  measurementTypeOptions = MeasurementTypes;

  onSaveClick() {
    this.saveClicked.emit(this.ingredient as Ingredient);
  }
}
