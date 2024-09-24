import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SalesComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SalesComponent,
      },
    ]),
    CommonModule,
  ],
})
export class SalesModule {}
