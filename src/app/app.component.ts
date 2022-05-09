import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoggedin: boolean;

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    /*let jwt = localStorage.getItem('access_token');
    if (jwt == null || this.authService.isTokenExpired(jwt)) {
      this.router.navigate(['/login']);
    }*/
  }

  onLogout() {
    this.authService.logout();
  }
}
