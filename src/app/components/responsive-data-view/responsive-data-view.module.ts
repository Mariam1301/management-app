import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { UiResponsiveDataViewComponent } from './responsive-data-view.component';
import { UiIconComponent } from '../icon/icon.component';
import { UiDataElement } from './data-element/data-element.component';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { UiConfirmationDirective } from '../confirmation/confirmation.directive';

@NgModule({
  declarations: [UiResponsiveDataViewComponent, UiDataElement],
  imports: [
    TableModule,
    CommonModule,
    UiIconComponent,
    ButtonModule,
    SkeletonModule,
    UiConfirmationDirective,
  ],
  exports: [UiResponsiveDataViewComponent, UiDataElement],
})
export class UiResponsiveDataViewModule {}
