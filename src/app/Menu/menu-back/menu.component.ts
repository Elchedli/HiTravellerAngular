import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  message = '';
  username = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.afficher();
  }
  afficher() {
    return localStorage.getItem('username');
  }
  afficherUser() {
    this.router.navigate(['users']);
  }
  createNew() {
    this.router.navigate(['signUp']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
  vide() {
    this.router.navigate(['vide']);
  }
}
