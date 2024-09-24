import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class AuthGoogleService {
  constructor(
    private readonly _oathService: OAuthService,
    private readonly _router: Router
  ) {
    this.initConfiguration();
  }
  initConfiguration() {
    const authConfig: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '',
      redirectUri: window.location.origin,
      scope: 'openId profile email',
    };

    this._oathService.configure(authConfig);
    this._oathService.setupAutomaticSilentRefresh();
    this._oathService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this._oathService.initImplicitFlow();
  }

  logout() {
    this._oathService.revokeTokenAndLogout();
    this._oathService.logOut();
  }

  getProfile() {
    return this._oathService.getIdentityClaims();
  }

  getToken() {
    return this._oathService.getAccessToken();
  }
}
