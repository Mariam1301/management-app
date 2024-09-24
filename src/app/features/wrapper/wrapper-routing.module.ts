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
        path: 'ingredient',
        loadChildren: () =>
          import('../ingredient/ingredient.module').then(
            (m) => m.IngredientModule
          ),
      },
      {
        path: 'meal',
        loadChildren: () =>
          import('../meal/meal.module').then((m) => m.MealModule),
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
