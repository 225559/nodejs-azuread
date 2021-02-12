import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spa';

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
}
