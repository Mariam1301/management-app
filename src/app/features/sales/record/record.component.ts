import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EntityModel } from '../../../services/entity-management/entity-management.model';
import { SaleRecord } from '../../../services/sales/sales.model';
import { SalesService } from '../../../services/sales/sales.service';
import { EntityManagementService } from '../../../services/entity-management/entity-management.service';

@Component({
  selector: 'record-dialog',
  templateUrl: './record.component.html',
})
export class RecordComponent implements OnInit {
  @Input()
  record: Partial<SaleRecord> = {};

  @Output()
  saveClicked = new EventEmitter<SaleRecord>();

  entityOptions: EntityModel[] = [];

  constructor(
    private readonly _salesService: SalesService,
    private readonly _entityManagementService: EntityManagementService
  ) {}

  ngOnInit(): void {
    this._entityManagementService
      .getDishes()
      .subscribe((data) => (this.entityOptions = data));
  }

  onSaveClick() {
    this.saveClicked.emit(this.record as SaleRecord);
  }

  onEntitySelect(id: number) {
    this.record = {
      ...this.record,
      price: this.entityOptions.find((entity) => entity.id === id)?.price,
    };
  }
}
