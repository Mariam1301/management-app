import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter/counter.reducer';
import { ButtonModule } from 'primeng/button';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { UiIconComponent } from './components/icon/icon.component';
import { UiLoaderDirective } from './components/loader/loader.directive';
import { WrapperModule } from './features/wrapper/wrapper.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './features/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { OAuthModule } from 'angular-oauth2-oidc';
import { provideHttpClient } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    ToastModule,
    LoginModule,
    WrapperModule,
    UiLoaderDirective,
    UiIconComponent,
    ProgressSpinnerModule,
    BrowserModule,
    ButtonModule,
    StoreModule.forRoot({ count: counterReducer }, {}),
    DashboardModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    OAuthModule.forRoot(),
  ],
  providers: [provideHttpClient(), MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
