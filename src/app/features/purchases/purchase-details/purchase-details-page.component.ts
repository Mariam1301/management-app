import { Component, DestroyRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  Purchase,
  PurchaseRecord,
} from '../../../services/purchases/purchase.model';
import { PurchasesService } from '../../../services/purchases/purchase.service';

@Component({
  templateUrl: './purchase-details-page.component.html',
})
export class PurchaseDetailsPageComponent implements OnInit {
  purcahseId!: number;
  purchase: Partial<Purchase> = {};
  records!: PurchaseRecord[];

  isDialogVisible = false;

  selectedPurchaseRecord!: Partial<PurchaseRecord>;

  editMode = false;

  purchaseForm: Partial<Purchase> = {};
  constructor(
    private readonly _purchasesService: PurchasesService,
    private readonly _route: ActivatedRoute,
    private readonly _destroyRef: DestroyRef
  ) {}
  ngOnInit(): void {
    this.purcahseId = Number(this._route.snapshot?.queryParamMap?.get('id'));
    this._route.data
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((data) => (this.purchase = data['details']));
    this.fetchRecords();
  }

  onAddClick() {
    this.isDialogVisible = true;
    this.selectedPurchaseRecord = {};
  }

  onDeleteClick(record: PurchaseRecord) {
    this._purchasesService
      .deleteRecord(this.purcahseId, record.id)
      .subscribe(() => this.fetchRecords());
  }

  onRowClick(record: PurchaseRecord) {
    this.isDialogVisible = true;
    this.selectedPurchaseRecord = { ...record };
  }

  onRecordSaveClick(record: PurchaseRecord) {
    this.isDialogVisible = false;
    const stream$ = record.id
      ? this._purchasesService.updateRecord(this.purcahseId, record)
      : this._purchasesService.addRecord(this.purcahseId, record);

    stream$.subscribe(() => this.fetchRecords());
  }

  fetchRecords() {
    this._purchasesService
      .getRecords(this.purcahseId as number)
      .subscribe((records) => (this.records = records));
  }

  onSaveClick(purchase: Purchase) {
    this._purchasesService
      .updatePurchase(purchase)
      .pipe(
        switchMap(() => this._purchasesService.getPurchaseById(purchase.id))
      )
      .subscribe((data) => {
        this.purchase = data;
        this.editMode = false;
      });
  }

  onEditPurchaseClick() {
    this.editMode = true;
    this.purchaseForm = { ...this.purchase };
  }
}
