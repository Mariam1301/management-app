import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../../services/sales/sales.service';
import { Sale, SaleRecord } from '../../../services/sales/sales.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

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
    private readonly _route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.saleId = Number(this._route.snapshot?.queryParamMap?.get('saleId'));
    this.fetchSale(this.saleId);
    this.fetchRecords();
  }

  onAddClick() {
    this.isDialogVisible = true;
    this.selectedSaleRecord = {};
  }

  onDeleteClick(record: SaleRecord) {
    this._salesService
      .deleteRecord(this.saleId, record.entity_id)
      .subscribe(() => this.fetchRecords());
  }

  onRowClick(record: SaleRecord) {
    this.isDialogVisible = true;
    this.selectedSaleRecord = { ...record };
  }

  onRecordSaveClick(record: SaleRecord) {
    this.isDialogVisible = false;
    this._salesService
      .addRecord(this.saleId, record)
      .subscribe(() => this.fetchRecords());
  }

  fetchRecords() {
    this._salesService
      .getRecords(this.saleId as number)
      .subscribe((records) => (this.records = records));
  }

  fetchSale(saleId: number) {
    this._salesService
      .getSaleById(saleId)
      .subscribe((data) => (this.sale = data));
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
