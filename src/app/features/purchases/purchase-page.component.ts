import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from '../../services/purchases/purchase.model';
import { PurchasesService } from '../../services/purchases/purchase.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchase-page.component.html',
})
export class PurchasesPageComponent {
  purchases!: Purchase[];

  isDialogVisible = false;

  selectedPurchase!: Partial<Purchase>;

  purchasesCount = 0;
  constructor(
    private readonly _purchasesService: PurchasesService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.fetchPurchases();
  }

  onRowClick(purcahse: Purchase) {
    this._router.navigate(['purchases', 'details'], {
      queryParams: { id: purcahse?.id },
    });
  }

  onAddClick() {
    this.isDialogVisible = true;
    this.selectedPurchase = {};
  }

  onSaveClick(purchase: Purchase) {
    this.isDialogVisible = false;
    !purchase.id &&
      this._purchasesService
        .createPurchase({
          ...purchase,
        })
        .subscribe(() => this.fetchPurchases());
  }

  onDeleteClick(purchase: Purchase) {
    this._purchasesService
      .deletePurchase(purchase.id)
      .subscribe(() => this.fetchPurchases());
  }

  fetchPurchases() {
    this._purchasesService.getAllPurchases().subscribe((purcahse) => {
      this.purchases = purcahse;
      this.purchasesCount = purcahse?.length;
    });
  }
}
