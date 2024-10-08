import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  templateUrl: './filter.component.html',
  selector: 'data-view-filter',
})
export class FilterComponent {
  @Input()
  showButtons = false;

  @Output()
  clearClicked = new EventEmitter();

  @Output()
  filterClicked = new EventEmitter();

  isExpanded = false;
}
