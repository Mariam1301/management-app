import { Component, Input } from '@angular/core';
import UiPaginationDataSource from '../../data-source/pagination-data-source';

@Component({
  selector: 'ui-load-more-button',
  templateUrl: './load-more-button.component.html',
})
export class UiLoadMoreButtonComponent {
  @Input({ required: true })
  dataSource!: UiPaginationDataSource;

  onShowMoreClick() {
    this.dataSource.loadMoreData();
  }
}
