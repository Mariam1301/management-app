import { Component, Input } from '@angular/core';
import UiPaginationDataSource from '../../data-source/pagination-data-source';

@Component({
  templateUrl: './paginator.component.html',
  selector: 'ui-paginator',
})
export class UiPaginatorComponent {
  @Input()
  dataSource!: UiPaginationDataSource;

  first: number = 0;

  onPageChange({ first, rows, page, pageCount }: Partial<PageEvent>) {
    this.first = first || 0;
    this.dataSource.fetchSpecificPage((page || 0) + 1, rows);
  }
}

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
