import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { config } from '../app-config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.http.get(config.api.endpoint)
      .subscribe({
        next: profile => {
          this.profile = profile;
        },
      });
  }

}
