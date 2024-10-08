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
          import('../sales/sales-page.module').then((m) => m.SalesPageModule),
      },
      {
        path: 'purchases',

        loadChildren: () =>
          import('../purchases/purchase-page.module').then(
            (m) => m.PurchasesPageModule
          ),
      },
      {
        path: 'production',

        loadChildren: () =>
          import('../production/production-page.module').then(
            (m) => m.ProductionPageModule
          ),
      },
      {
        path: 'not-found',
        loadChildren: () =>
          import('../not-found/not-found.module').then((m) => m.NotFoundModule),
      },
      { path: '**', redirectTo: '/ingredients', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrapperRoutingModule {}
