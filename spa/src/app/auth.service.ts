import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './app-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oauth: OAuthService) {
    this.oauth.configure(authConfig);
    this.oauth.loadDiscoveryDocumentAndTryLogin()
      .then(() => {
        let idc = this.oauth.getIdentityClaims();
        if (idc) {
          console.log(idc);
        }
      })
      .catch(error => {
        console.error(error);
      });
    this.oauth.setupAutomaticSilentRefresh();
  }

  public signIn(): void {
    this.oauth.initLoginFlow();
  }

  public signOut(): void {
    this.oauth.logOut();
  }

  public hasAccess(): boolean {
    return this.oauth.hasValidAccessToken();
  }
}
