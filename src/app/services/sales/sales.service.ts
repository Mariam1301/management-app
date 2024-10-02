import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';
import { Sale, SaleRecord } from './sales.model';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  entityName = 'accounting';

  constructor(private readonly _baseHttpService: BaseHttpService) {}

  getAllSales(pageNumber: number, pageSize: number) {
    return this._baseHttpService.get<Sale[]>(
      `${this.entityName}`,
      { page: pageNumber, per_page: pageSize },
      {
        loaderId: 'sales',
      }
    );
  }

  getSaleById(id: number) {
    return this._baseHttpService.get<Sale>(`${this.entityName}/${id}`);
  }
  createSale(sale: any) {
    return this._baseHttpService.post<unknown, any>(`${this.entityName}`, sale);
  }

  updateSale(sale: Sale) {
    return this._baseHttpService.put<unknown, Partial<Sale>>(
      `${this.entityName}/${sale.id}`,
      { id: sale.id, title: sale.title, date: sale.date }
    );
  }
  deleteSale(id: number) {
    return this._baseHttpService.delete<unknown>(`${this.entityName}/${id}`);
  }

  getRecords(saleId: number) {
    return this._baseHttpService.get<SaleRecord[]>(
      `${this.entityName}/${saleId}/record`,
      undefined,
      { loaderId: 'records' }
    );
  }

  addRecord(saleId: number, record: SaleRecord) {
    return this._baseHttpService.post<unknown, SaleRecord>(
      `${this.entityName}/${saleId}/record`,
      record
    );
  }
  updateRecord(saleId: number, record: SaleRecord) {
    return this._baseHttpService.put<unknown, Partial<SaleRecord>>(
      `${this.entityName}/${saleId}/record/${record.id}`,
      {
        entity_id: record.entity_id,
        amount: record.amount,
        price: record.price,
      }
    );
  }

  deleteRecord(saleId: number, recordId: number) {
    return this._baseHttpService.delete<unknown>(
      `${this.entityName}/${saleId}/record/${recordId}`
    );
  }
}
