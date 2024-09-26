import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Dish,
  MeasurementTypes,
} from '../../../services/entity-management/entity-management.model';

@Component({
  selector: 'dish-dialog',
  templateUrl: './dish.component.html',
})
export class DishComponent {
  @Input()
  dish: Partial<Dish> = {};

  @Output()
  saveClicked = new EventEmitter<Dish>();

  measurementTypeOptions = MeasurementTypes;

  onSaveClick() {
    this.saveClicked.emit(this.dish as Dish);
  }
}
