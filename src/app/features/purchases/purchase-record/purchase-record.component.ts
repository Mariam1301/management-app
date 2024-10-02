import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EntityModel } from '../../../services/entity-management/entity-management.model';
import { EntityManagementService } from '../../../services/entity-management/entity-management.service';
import { PurchaseRecord } from '../../../services/purchases/purchase.model';
import { map } from 'rxjs';

@Component({
  selector: 'record-dialog',
  templateUrl: './purchase-record.component.html',
})
export class PurchaseRecordComponent implements OnInit {
  @Input()
  record: Partial<PurchaseRecord> = {};

  @Output()
  saveClicked = new EventEmitter<PurchaseRecord>();

  entityOptions: EntityModel[] = [];

  constructor(
    private readonly _entityManagementService: EntityManagementService
  ) {}

  ngOnInit(): void {
    this._entityManagementService
      .getAllIngredients()
      .pipe(map((response) => response.data))
      .subscribe((data) => (this.entityOptions = data));
  }

  onSaveClick() {
    this.saveClicked.emit(this.record as PurchaseRecord);
  }

  onEntitySelect(id: number) {
    this.record = {
      ...this.record,
      price: this.entityOptions.find((entity) => entity.id === id)?.price,
    };
  }
}
