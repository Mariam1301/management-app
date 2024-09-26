import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { UiDataElement } from './data-element/data-element.component';

@Component({
  selector: 'ui-responsive-data-view',
  templateUrl: './responsive-data-view.component.html',
})
export class UiResponsiveDataViewComponent implements AfterContentInit {
  @Input()
  showAddButton?: boolean;

  @Input()
  showDeleteButton?: boolean;

  @Input({ required: true })
  data?: any[] = [];

  @Input()
  trackPropertyName = 'id';

  @Input()
  title?: string;

  @Output()
  addButtonClicked = new EventEmitter();

  @Output()
  rowClicked = new EventEmitter();

  @Output()
  deleteClicked = new EventEmitter();

  @ContentChildren(UiDataElement)
  contentChildren!: QueryList<UiDataElement>;

  columnList!: any[];

  ngAfterContentInit(): void {
    this.columnList = this.contentChildren.toArray();
  }

  onDeleteClick(event: MouseEvent, row: any) {
    event.stopImmediatePropagation();
    this.deleteClicked.emit(row);
  }
}
