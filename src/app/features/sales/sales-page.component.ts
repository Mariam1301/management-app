import { Component } from '@angular/core';
import { Sale } from '../../services/sales/sales.model';
import { SalesService } from '../../services/sales/sales.service';
import { Router } from '@angular/router';
import UiDatasourceCreator from '../../components/data-source/data-source-creator';
import UiPaginationDataSource from '../../components/data-source/pagination-data-source';

@Component({
  selector: 'app-sales',
  templateUrl: './sales-page.component.html',
})
export class SalesPageComponent {
  sales!: Sale[];

  isDialogVisible = false;

  selectedSale!: Partial<Sale>;

  salesCount = 0;

  salesDataSource!: UiPaginationDataSource;

  constructor(
    private readonly _salesService: SalesService,
    private readonly _router: Router,
    private readonly _dsCreator: UiDatasourceCreator
  ) {}

  ngOnInit(): void {
    this.salesDataSource = this._dsCreator.createWithPagination(
      (pageNumber, pageSize, filter) =>
        this._salesService.getAllSales(pageNumber, pageSize, filter)
    );
  }

  onRowClick(sale: Sale) {
    this._router.navigate(['sales', 'details'], {
      queryParams: { id: sale?.id },
    });
  }

  onAddClick() {
    this.isDialogVisible = true;
    this.selectedSale = {};
  }

  onSaveClick(sale: Sale) {
    this.isDialogVisible = false;
    !sale.id &&
      this._salesService
        .createSale({
          ...sale,
        })
        .subscribe(() => this.fetchSales());
  }

  onDeleteClick(sale: Sale) {
    this._salesService
      .deleteSale(sale.id)
      .subscribe(() => this.salesDataSource.refresh());
  }

  fetchSales() {
    this.salesDataSource.fetchData();
  }

  onfilterclick() {
    this.salesDataSource.fetchData();
  }
}
