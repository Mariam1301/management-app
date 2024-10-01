import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  EntityModel,
  MeasurementTypes,
} from '../../../services/entity-management/entity-management.model';

@Component({
  selector: 'ingredient-dialog',
  templateUrl: './ingredient.component.html',
})
export class IngredientComponent {
  @Input()
  ingredient: Partial<EntityModel> = {};

  @Output()
  saveClicked = new EventEmitter<EntityModel>();

  measurementTypeOptions = MeasurementTypes;

  onSaveClick() {
    this.saveClicked.emit(this.ingredient as EntityModel);
  }
}
