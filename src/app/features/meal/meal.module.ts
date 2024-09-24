import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealComponent } from './meal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MealComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MealComponent,
      },
    ]),
    CommonModule,
  ],
})
export class MealModule {}
