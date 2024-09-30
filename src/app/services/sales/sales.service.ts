import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';
import { Sale, SaleRecord } from './sales.model';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  entityName = 'accounting';

  constructor(private readonly _baseHttpService: BaseHttpService) {}

  getAllSales() {
    return this._baseHttpService.get<Sale[]>(`${this.entityName}`);
  }

  getSaleById(id: number) {
    return this._baseHttpService.get<Sale>(`${this.entityName}/${id}`);
  }
  createSale(sale: any) {
    return this._baseHttpService.post<unknown, any>(`${this.entityName}`, sale);
  }

  updateSale(sale: Sale) {
    return this._baseHttpService.put<unknown, Sale>(`${this.entityName}`, sale);
  }
  deleteSale(id: number) {
    return this._baseHttpService.delete<unknown>(`${this.entityName}/${id}`);
  }

  getRecords(saleId: number) {
    return this._baseHttpService.get<SaleRecord[]>(
      `${this.entityName}/${saleId}/record`
    );
  }

  addRecord(saleId: number, record: SaleRecord) {
    return this._baseHttpService.post<unknown, SaleRecord>(
      `${this.entityName}/${saleId}/record`,
      record
    );
  }

  deleteRecord(saleId: number, recordId: number) {
    return this._baseHttpService.delete<unknown>(
      `${this.entityName}/${saleId}/record/${recordId}`
    );
  }
}
