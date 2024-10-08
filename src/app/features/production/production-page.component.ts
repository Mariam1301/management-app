import { Component, OnInit } from '@angular/core';
import UiPaginationDataSource from '../../components/data-source/pagination-data-source';
import UiDatasourceCreator from '../../components/data-source/data-source-creator';
import { ProductionService } from '../../services/production/production.service';
import { Production } from '../../services/production/production.model';

@Component({
  templateUrl: './production-page.component.html',
})
export class ProductionPageComponent implements OnInit {
  isDialogVisible = false;

  selectedProductionRecord!: Partial<Production>;

  productionDataSource!: UiPaginationDataSource;

  // stockStatus = StockStatus;
  constructor(
    private readonly _productionService: ProductionService,
    private readonly _dsCreator: UiDatasourceCreator
  ) {}

  ngOnInit(): void {
    this.productionDataSource = this._dsCreator.createWithPagination(
      (pageNumber, pageSize, filter) =>
        this._productionService.getAllProduction(pageNumber, pageSize, filter)
    );
  }

  onRowClick(stock: Production) {
    this.isDialogVisible = true;
    this.selectedProductionRecord = { ...stock };
  }

  onAddClick() {
    this.isDialogVisible = true;
    this.selectedProductionRecord = {};
  }

  onSaveClick(production: Production) {
    this.isDialogVisible = false;
    production.id
      ? this._productionService
          .updateProductionRecord(production)
          .subscribe(() => this.productionDataSource.refresh())
      : this._productionService
          .addProductionRecord(production)
          .subscribe(() => this.productionDataSource.fetchSpecificPage(1));
  }

  onDeleteClick(production: Production) {
    this._productionService
      .deleteProductionRecord(production.id)
      .subscribe(() => this.productionDataSource.refresh());
  }
}
