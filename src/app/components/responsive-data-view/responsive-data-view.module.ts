import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { UiResponsiveDataViewComponent } from './responsive-data-view.component';
import { UiIconComponent } from '../icon/icon.component';
import { UiDataElement } from './data-element/data-element.component';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { UiConfirmationDirective } from '../confirmation/confirmation.directive';
import { UiPaginatorComponent } from './paginator/paginator.component';
import { PaginatorModule } from 'primeng/paginator';
import { UiLoadMoreButtonComponent } from './load-more/load-more-button.component';

@NgModule({
  declarations: [
    UiResponsiveDataViewComponent,
    UiDataElement,
    UiPaginatorComponent,
    UiLoadMoreButtonComponent,
  ],
  imports: [
    TableModule,
    CommonModule,
    UiIconComponent,
    ButtonModule,
    SkeletonModule,
    UiConfirmationDirective,
    PaginatorModule,
    ButtonModule,
  ],
  exports: [UiResponsiveDataViewComponent, UiDataElement],
})
export class UiResponsiveDataViewModule {}
