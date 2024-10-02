import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MeasurementTypes } from '../../../services/entity-management/entity-management.model';
import { formatDateToISODate } from '../../../utils/date-formating';
import { Purchase } from '../../../services/purchases/purchase.model';

@Component({
  selector: 'purchase-basic-form',
  templateUrl: './purchase.component.html',
})
export class PurchaseComponent {
  @Input()
  purchase: Partial<Purchase> = {};

  @Input()
  isDialog = true;

  @Output()
  saveClicked = new EventEmitter<Purchase>();

  @Output()
  canceledClicked = new EventEmitter();

  measurementTypeOptions = MeasurementTypes;

  onSaveClick() {
    this.saveClicked.emit({
      ...this.purchase,
      date: formatDateToISODate(this.purchase.date as Date),
    } as Purchase);
  }
}
