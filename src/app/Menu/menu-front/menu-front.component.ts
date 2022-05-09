import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-menu-front',
  templateUrl: './menu-front.component.html',
  styleUrls: ['./menu-front.component.css'],
})
export class MenuFrontComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
