import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { GoogleAuthButtonComponent } from './google-auth-button/google-auth-button.component';

@NgModule({
  declarations: [LoginComponent, GoogleAuthButtonComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
      },
    ]),
    CommonModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
