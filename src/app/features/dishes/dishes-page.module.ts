import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesPageComponent } from './dishes-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { UiIconComponent } from '../../components/icon/icon.component';
import { UiResponsiveDataViewModule } from '../../components/responsive-data-view/responsive-data-view.module';
import { UiTemplateDirective } from '../../components/template/ui-template.directive';
import { MeasurementTypePipe } from '../../pipes/measurement-type.pipe';
import { DishComponent } from './dish/dish.component';
import { UiDialogModule } from '../../components/dialog/dialog.module';
import { UiLoaderDirective } from '../../components/loader/loader.directive';

@NgModule({
  declarations: [DishesPageComponent, DishComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DishesPageComponent,
      },
    ]),
    UiTemplateDirective,
    UiResponsiveDataViewModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    UiDialogModule,
    UiIconComponent,
    TableModule,
    CommonModule,
    MeasurementTypePipe,
    UiLoaderDirective,
  ],
})
export class DishesPageModule {}
