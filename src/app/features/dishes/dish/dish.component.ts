import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  EntityModel,
  MeasurementTypes,
} from '../../../services/entity-management/entity-management.model';

@Component({
  selector: 'dish-basic-form',
  templateUrl: './dish.component.html',
})
export class DishComponent {
  @Input()
  dish: Partial<EntityModel> = {};

  @Input()
  isDialog = true;

  @Output()
  saveClicked = new EventEmitter<EntityModel>();

  measurementTypeOptions = MeasurementTypes;

  onSaveClick() {
    this.saveClicked.emit(this.dish as EntityModel);
  }
}
