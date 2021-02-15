import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spa';

  constructor(private auth: AuthService) {}

  signIn(): void {
    this.auth.signIn();
  }

  signOut(): void {
    this.auth.signOut();
  }

  get hasAccess() {
    return this.auth.hasAccess();
  }
}
