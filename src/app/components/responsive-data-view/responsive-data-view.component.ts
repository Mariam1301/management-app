import {
  AfterContentInit,
  Component,
  ContentChildren,
  DestroyRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { UiDataElement } from './data-element/data-element.component';
import { LoaderService } from '../../services/loader/loader.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ui-responsive-data-view',
  templateUrl: './responsive-data-view.component.html',
})
export class UiResponsiveDataViewComponent implements AfterContentInit, OnInit {
  @Input()
  showAddButton?: boolean;

  @Input()
  showDeleteButton?: boolean;

  @Input()
  data?: any[];

  @Input()
  dataSource?: any;

  @Input()
  trackPropertyName = 'id';

  @Input()
  title?: string;

  @Input()
  loaderId?: string;

  @Input()
  clickable = true;

  @Input()
  emitDeleteIndex = false;

  @Input()
  emitRowIndex = false;

  @Input()
  hasPagination? = false;

  @Output()
  addButtonClicked = new EventEmitter();

  @Output()
  rowClicked = new EventEmitter();

  @Output()
  deleteClicked = new EventEmitter();

  @ContentChildren(UiDataElement)
  contentChildren!: QueryList<UiDataElement>;

  columnList!: any[];

  isLoading = true;

  constructor(
    private readonly _loaderService: LoaderService,
    private readonly _destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.dataSource?.fetchData();
    if (this.loaderId) {
      this._loaderService.loader$
        .pipe(takeUntilDestroyed(this._destroyRef))
        .subscribe(
          ({ loaderId, showLoader }) =>
            loaderId === this.loaderId && (this.isLoading = showLoader)
        );
    }
  }

  ngAfterContentInit(): void {
    this.columnList = this.contentChildren.toArray();
  }

  onDeleteClick(row: any, index?: number) {
    this.emitDeleteIndex
      ? this.deleteClicked.emit(index)
      : this.deleteClicked.emit(row);
  }
}
