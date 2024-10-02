import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesPageComponent } from './purchase-page.component';
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
import { CalendarModule } from 'primeng/calendar';
import { PurchaseDetailsPageComponent } from './purchase-details/purchase-details-page.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PurchaseRecordComponent } from './purchase-record/purchase-record.component';
import { SaleDetailsResolver } from '../../services/resolvers/sale-details-resolver.service';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseDetailsResolver } from '../../services/resolvers/purchase-details-resolver.service';

@NgModule({
  declarations: [
    PurchasesPageComponent,
    PurchaseRecordComponent,
    PurchaseDetailsPageComponent,
    PurchaseComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PurchasesPageComponent,
      },
      {
        path: 'details',
        resolve: { details: PurchaseDetailsResolver },
        component: PurchaseDetailsPageComponent,
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
export class PurchasesPageModule {}
