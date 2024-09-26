import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { WrapperComponent } from './wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'ingredients',
        loadChildren: () =>
          import('../ingredients/ingredients-page.module').then(
            (m) => m.IngredientsPageModule
          ),
      },
      {
        path: 'dishes',
        loadChildren: () =>
          import('../dishes/dishes-page.module').then(
            (m) => m.DishesPageModule
          ),
      },
      {
        path: 'sales',
        loadChildren: () =>
          import('../sales/sales.module').then((m) => m.SalesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrapperRoutingModule {}
