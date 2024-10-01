import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  EntityModel,
  IngredientRecord,
  MeasurementTypes,
} from '../../../services/entity-management/entity-management.model';
import { EntityManagementService } from '../../../services/entity-management/entity-management.service';

@Component({
  selector: 'ingredient-record-dialog',
  templateUrl: './ingredient-record.component.html',
})
export class IngredientRecordComponent implements OnInit {
  @Input()
  ingredientRecord: Partial<EntityModel> = {};

  @Output()
  saveClicked = new EventEmitter<IngredientRecord>();

  ingredientOptions: EntityModel[] = [];

  measurementTypeOptions = MeasurementTypes;

  selectedRecord: Partial<EntityModel> = {};

  constructor(
    private readonly _entityManagementService: EntityManagementService
  ) {}

  ngOnInit(): void {
    this._entityManagementService.getAllIngredients().subscribe((data) => {
      this.ingredientOptions = data;

      this.selectedRecord =
        this.ingredientOptions.find(
          (item) => item.id === this.ingredientRecord.id
        ) || {};
    });
  }

  onIngredientSelect(ingredient: EntityModel) {
    this.ingredientRecord = {
      ...this.ingredientRecord,
      title: ingredient.title,
      id: ingredient.id,
      measurement_type: ingredient.measurement_type,
    };
  }

  onSaveClick() {
    this.saveClicked.emit(this.ingredientRecord as IngredientRecord);
  }
}
