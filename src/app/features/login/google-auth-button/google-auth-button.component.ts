import { Component } from '@angular/core';
import { AuthGoogleService } from '../../../services/authentication/auth-google.service';

@Component({
  selector: 'google-auth-button',
  templateUrl: './google-auth-button.component.html',
})
export class GoogleAuthButtonComponent {
  constructor(private readonly _authGoogleService: AuthGoogleService) {}

  signInWithGoogle() {
    this._authGoogleService.login();
  }
}
