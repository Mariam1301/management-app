import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';
import { Purchase, PurchasePageFilter, PurchaseRecord } from './purchase.model';
import { formatDateToISODate } from '../../utils/date-formating';

@Injectable({
  providedIn: 'root',
})
export class PurchasesService {
  entityName = 'purchase';

  constructor(private readonly _baseHttpService: BaseHttpService) {}

  getAllPurchases(
    pageNumber: number,
    pageSize: number,
    filter: PurchasePageFilter
  ) {
    return this._baseHttpService.get<Purchase[]>(
      `${this.entityName}`,
      {
        page: pageNumber,
        per_page: pageSize,
        start_date: filter.start_date
          ? formatDateToISODate(filter.start_date)
          : undefined,
        end_date: filter.end_date
          ? formatDateToISODate(filter.end_date)
          : undefined,
      },
      {
        loaderId: 'purchases',
      }
    );
  }

  getPurchaseById(id: number) {
    return this._baseHttpService.get<Purchase>(`${this.entityName}/${id}`);
  }
  createPurchase(purchase: any) {
    return this._baseHttpService.post<unknown, any>(
      `${this.entityName}`,
      purchase
    );
  }

  updatePurchase(purchase: Purchase) {
    return this._baseHttpService.put<unknown, Partial<Purchase>>(
      `${this.entityName}/${purchase.id}`,
      { id: purchase.id, title: purchase.title, date: purchase.date }
    );
  }
  deletePurchase(id: number) {
    return this._baseHttpService.delete<unknown>(`${this.entityName}/${id}`);
  }

  getRecords(purchaseId: number) {
    return this._baseHttpService.get<PurchaseRecord[]>(
      `${this.entityName}/${purchaseId}/record`,
      undefined,
      { loaderId: 'records' }
    );
  }

  addRecord(purchaseId: number, record: PurchaseRecord) {
    return this._baseHttpService.post<unknown, PurchaseRecord>(
      `${this.entityName}/${purchaseId}/record`,
      record
    );
  }
  updateRecord(purchaseId: number, record: PurchaseRecord) {
    return this._baseHttpService.put<unknown, Partial<PurchaseRecord>>(
      `${this.entityName}/${purchaseId}/record/${record.id}`,
      {
        entity_id: record.entity_id,
        amount: record.amount,
        price: record.price,
      }
    );
  }

  deleteRecord(purchaseId: number, recordId: number) {
    return this._baseHttpService.delete<unknown>(
      `${this.entityName}/${purchaseId}/record/${recordId}`
    );
  }
}
