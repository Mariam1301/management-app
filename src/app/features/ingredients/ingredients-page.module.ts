import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsPageComponent } from './ingredients-page.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { MeasurementTypePipe } from '../../pipes/measurement-type.pipe';
import { UiIconComponent } from '../../components/icon/icon.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { UiResponsiveDataViewModule } from '../../components/responsive-data-view/responsive-data-view.module';
import { UiTemplateDirective } from '../../components/template/ui-template.directive';
import { UiDialogModule } from '../../components/dialog/dialog.module';

@NgModule({
  declarations: [IngredientsPageComponent, IngredientComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: IngredientsPageComponent,
      },
    ]),
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
export class IngredientsPageModule {}
