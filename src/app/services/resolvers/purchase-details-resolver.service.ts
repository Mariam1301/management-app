import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseEntityResolver } from './base-details-resolver.service';
import { Purchase } from '../purchases/purchase.model';
import { PurchasesService } from '../purchases/purchase.service';

@Injectable({
  providedIn: 'root',
})
export class PurchaseDetailsResolver extends BaseEntityResolver<Purchase> {
  constructor(
    private readonly _purchasesService: PurchasesService,
    router: Router
  ) {
    super(
      router,
      { getById: (id: number) => this._purchasesService.getPurchaseById(id) },
      '/purchases'
    );
  }
}
