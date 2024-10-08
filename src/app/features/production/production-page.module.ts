import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductionPageComponent } from './production-page.component';
import { CalendarModule } from 'primeng/calendar';
import { UiTemplateDirective } from '../../components/template/ui-template.directive';
import { UiResponsiveDataViewModule } from '../../components/responsive-data-view/responsive-data-view.module';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { UiIconComponent } from '../../components/icon/icon.component';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { UiDialogModule } from '../../components/dialog/dialog.module';
import { ProductionRecordComponent } from './production-record/production.component';

@NgModule({
  declarations: [ProductionPageComponent, ProductionRecordComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductionPageComponent,
      },
    ]),
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
    UiDialogModule,
  ],
})
export class ProductionPageModule {}
