import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from '../../services/purchases/purchase.model';
import { PurchasesService } from '../../services/purchases/purchase.service';
import UiPaginationDataSource from '../../components/data-source/pagination-data-source';
import UiDatasourceCreator from '../../components/data-source/data-source-creator';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchase-page.component.html',
})
export class PurchasesPageComponent {
  isDialogVisible = false;

  selectedPurchase!: Partial<Purchase>;

  purchasesDataSource!: UiPaginationDataSource;
  constructor(
    private readonly _purchasesService: PurchasesService,
    private readonly _router: Router,
    private readonly _dsCreator: UiDatasourceCreator
  ) {}

  ngOnInit(): void {
    this.purchasesDataSource = this._dsCreator.createWithPagination(
      (pageNumber, pageSize) =>
        this._purchasesService.getAllPurchases(pageNumber, pageSize)
    );
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
        .subscribe(() => this.purchasesDataSource.fetchSpecificPage(1));
  }

  onDeleteClick(purchase: Purchase) {
    this._purchasesService
      .deletePurchase(purchase.id)
      .subscribe(() => this.purchasesDataSource.refresh());
  }
}
