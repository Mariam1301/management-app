import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesPageComponent } from './sales-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { UiDialogModule } from '../../components/dialog/dialog.module';
import { UiIconComponent } from '../../components/icon/icon.component';
import { UiResponsiveDataViewModule } from '../../components/responsive-data-view/responsive-data-view.module';
import { UiTemplateDirective } from '../../components/template/ui-template.directive';
import { MeasurementTypePipe } from '../../pipes/measurement-type.pipe';
import { SaleComponent } from './sale/sale.component';
import { CalendarModule } from 'primeng/calendar';
import { SaleDetailsPageComponent } from './sale-details/sale-details-page.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RecordComponent } from './record/record.component';
import { SaleDetailsResolver } from '../../services/resolvers/sale-details-resolver.service';

@NgModule({
  declarations: [
    SalesPageComponent,
    SaleComponent,
    SaleDetailsPageComponent,
    RecordComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SalesPageComponent,
      },
      {
        path: 'details',
        resolve: { details: SaleDetailsResolver },
        component: SaleDetailsPageComponent,
      },
    ]),
    BreadcrumbModule,
    RouterModule,
    CalendarModule,
    UiTemplateDirective,
    UiResponsiveDataViewModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    UiIconComponent,
    TableModule,
    CommonModule,
    MeasurementTypePipe,
    UiDialogModule,
  ],
})
export class SalesPageModule {}
