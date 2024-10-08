import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Production } from '../../../services/production/production.model';
import { EntityManagementService } from '../../../services/entity-management/entity-management.service';
import { EntityModel } from '../../../services/entity-management/entity-management.model';
import { map } from 'rxjs';

@Component({
  selector: 'production-record-dialog',
  templateUrl: './production.component.html',
})
export class ProductionRecordComponent {
  @Input()
  productionRecord: Partial<Production> = {};

  @Output()
  saveClicked = new EventEmitter<Production>();

  entityOptions: EntityModel[] = [];

  constructor(
    private readonly _entityManagementService: EntityManagementService
  ) {}

  ngOnInit(): void {
    this._entityManagementService
      .getDishes()
      .pipe(map((response) => response.data))
      .subscribe((data) => (this.entityOptions = data));
  }

  onSaveClick() {
    this.saveClicked.emit(this.productionRecord as Production);
  }
}
