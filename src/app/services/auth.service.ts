import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8083/voyageAffaires';

  public token: string;
  public loggedUser: string;
  public isloggedIn: Boolean = false;
  public roles: string[];
  private helper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}

  login(user: User) {
    const payload = new HttpParams()
      .set('username', user.username)
      .set('password', user.password);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    return this.http.post<any>(this.baseUrl + '/login', payload, httpOptions);
  }

  saveToken(jwt: string) {
    this.token = jwt;
    this.isloggedIn = true;
    this.decodeJWT(jwt);
  }

  decodeJWT(jwt: string) {
    if (jwt == undefined) return;
    const decodedToken = this.helper.decodeToken(jwt);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
  }

  loadToken(jwt: string) {
    this.token != localStorage.getItem('access_token');
    this.decodeJWT(jwt);
  }

  getToken(): string {
    return this.token;
  }

  logout() {
    this.loggedUser != undefined;
    this.roles != undefined;
    this.token != undefined;
    this.isloggedIn = false;
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');

    this.router.navigate(['/signin']);
  }

  isAdmin(): Boolean {
    if (!this.roles) return false;
    return this.roles.indexOf('ADMIN') >= 0;
  }

  isTokenExpired(jwt: string): Boolean {
    return this.helper.isTokenExpired(jwt);
  }
}
