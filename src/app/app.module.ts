import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter/counter.reducer';
import { ButtonModule } from 'primeng/button';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { IconComponent } from './components/icon/icon.component';
import { LoaderDirective } from './components/loader/loader.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    LoaderDirective,
    IconComponent,
    ProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    StoreModule.forRoot({ count: counterReducer }, {}),
    DashboardModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
