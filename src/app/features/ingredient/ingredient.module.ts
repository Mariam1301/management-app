import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientComponent } from './ingredient.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [IngredientComponent],
  imports: [
    TableModule,
    RouterModule.forChild([
      {
        path: '',
        component: IngredientComponent,
      },
    ]),
    CommonModule,
  ],
})
export class IngredientModule {}
