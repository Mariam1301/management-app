import { Component, DestroyRef, OnInit } from '@angular/core';
import { SalesService } from '../../../services/sales/sales.service';
import { Sale, SaleRecord } from '../../../services/sales/sales.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  templateUrl: './sale-details-page.component.html',
})
export class SaleDetailsPageComponent implements OnInit {
  saleId!: number;
  sale: Partial<Sale> = {};
  records!: SaleRecord[];

  isDialogVisible = false;

  selectedSaleRecord!: Partial<SaleRecord>;

  editMode = false;

  saleForm: Partial<Sale> = {};
  constructor(
    private readonly _salesService: SalesService,
    private readonly _route: ActivatedRoute,
    private readonly _destroyRef: DestroyRef
  ) {}
  ngOnInit(): void {
    this.saleId = Number(this._route.snapshot?.queryParamMap?.get('id'));
    this._route.data
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((data) => {
        console.log(data);
        this.sale = data['details'];
      });
    this.fetchRecords();
  }

  onAddClick() {
    this.isDialogVisible = true;
    this.selectedSaleRecord = {};
  }

  onDeleteClick(record: SaleRecord) {
    this._salesService
      .deleteRecord(this.saleId, record.id)
      .subscribe(() => this.fetchRecords());
  }

  onRowClick(record: SaleRecord) {
    this.isDialogVisible = true;
    this.selectedSaleRecord = { ...record };
  }

  onRecordSaveClick(record: SaleRecord) {
    this.isDialogVisible = false;
    const stream$ = record.id
      ? this._salesService.updateRecord(this.saleId, record)
      : this._salesService.addRecord(this.saleId, record);

    stream$.subscribe(() => this.fetchRecords());
  }

  fetchRecords() {
    this._salesService
      .getRecords(this.saleId as number)
      .subscribe((records) => (this.records = records));
  }

  onSaveClick(sale: Sale) {
    this._salesService
      .updateSale(sale)
      .pipe(switchMap(() => this._salesService.getSaleById(sale.id)))
      .subscribe((data) => {
        this.sale = data;
        this.editMode = false;
      });
  }

  onEditSaleClick() {
    this.editMode = true;
    this.saleForm = { ...this.sale };
  }
}
