import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';
import {
  Production,
  ProductionCreateModel,
  ProductionPageFilter,
} from './production.model';
import { formatDateToISODate } from '../../utils/date-formating';

@Injectable({
  providedIn: 'root',
})
export class ProductionService {
  entityName = 'stock';

  constructor(private readonly _baseHttpService: BaseHttpService) {}

  getAllProduction(
    pageNumber: number,
    pageSize: number,
    filter: ProductionPageFilter
  ) {
    return this._baseHttpService.get<{ data: ProductionCreateModel[] }>(
      `${this.entityName}`,
      {
        page: pageNumber,
        per_page: pageSize,
        ...filter,
        start_date: filter.start_date
          ? formatDateToISODate(filter.start_date)
          : undefined,
        end_date: filter.end_date
          ? formatDateToISODate(filter.end_date)
          : undefined,
      },
      { loaderId: 'production' }
    );
  }

  addProductionRecord(data: Production) {
    return this._baseHttpService.post<unknown, ProductionCreateModel>(
      `${this.entityName}`,
      {
        entity_id: data.entity_id,
        amount: data.amount,
        date: data.date ? formatDateToISODate(data.date) : undefined,
      }
    );
  }
  updateProductionRecord(data: Production) {
    return this._baseHttpService.put<unknown, ProductionCreateModel>(
      `${this.entityName}/${data.id}`,
      {
        entity_id: data.entity_id,
        amount: data.amount,
        date: data.date ? formatDateToISODate(data.date) : undefined,
      }
    );
  }

  deleteProductionRecord(id: number) {
    return this._baseHttpService.delete<unknown>(`${this.entityName}/${id}`);
  }
}
