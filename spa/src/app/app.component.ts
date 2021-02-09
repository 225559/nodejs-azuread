import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spa';

  constructor(private authService: MsalService) {}

  ngOnInit(): void {
    this.authService.handleRedirectCallback((err, res) => {
      if (err) {
        console.error('Redirect error: ', err.errorMessage);
        return;
      }
      console.log('Redirect success: ', res?.accessToken);
    });
  }
}
