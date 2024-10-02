import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MeasurementTypes } from '../../../services/entity-management/entity-management.model';
import { Sale } from '../../../services/sales/sales.model';
import { formatDateToISODate } from '../../../utils/date-formating';

@Component({
  selector: 'sale-basic-form',
  templateUrl: './sale.component.html',
})
export class SaleComponent {
  @Input()
  sale: Partial<Sale> = {};

  @Input()
  isDialog = true;

  @Output()
  saveClicked = new EventEmitter<Sale>();

  @Output()
  canceledClicked = new EventEmitter();

  measurementTypeOptions = MeasurementTypes;

  onSaveClick() {
    this.saveClicked.emit({
      ...this.sale,
      date: formatDateToISODate(this.sale.date as Date),
    } as Sale);
  }
}
