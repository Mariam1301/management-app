import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Sale } from '../sales/sales.model';
import { SalesService } from '../sales/sales.service';
import { BaseEntityResolver } from './base-details-resolver.service';

@Injectable({
  providedIn: 'root',
})
export class SaleDetailsResolver extends BaseEntityResolver<Sale> {
  constructor(private readonly _saleService: SalesService, router: Router) {
    super(
      router,
      { getById: (id: number) => this._saleService.getSaleById(id) },
      '/sales'
    );
  }
}
