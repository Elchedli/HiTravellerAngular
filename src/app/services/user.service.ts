import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8083/voyageAffaires';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  createAdmin(user: User): Observable<Object> {
    return this.http.post(`${this.baseUrl}/registration/admin/`, user);
  }
  createCompany(user: User): Observable<Object> {
    return this.http.post(`${this.baseUrl}/registration/company/`, user);
  }
  createEmployee(user: User): Observable<Object> {
    return this.http.post(`${this.baseUrl}/registration/employee/`, user);
  }

  updateUser(user: User, id: number): Observable<Object> {
    let jwt = localStorage.getItem('access_token');
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.put(`${this.baseUrl}/user/update`, user, {
      headers: httpHeaders,
    });
  }

  getUser(id: number): Observable<any> {
    let jwt = localStorage.getItem('access_token');
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.get(`${this.baseUrl}/user/${id}`, {
      headers: httpHeaders,
    });
  }

  deleteUser(id: number): Observable<any> {
    let jwt = localStorage.getItem('access_token');
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.delete(`${this.baseUrl}/user/${id}`, {
      headers: httpHeaders,
    });
  }

  banUser(id: number): Observable<any> {
    let jwt = localStorage.getItem('access_token');
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.put(
      `http://localhost:8083/voyageAffaires/user/lockUser/${id}`,
      {
        headers: httpHeaders,
      }
    );
  }

  getUsersList(): Observable<any> {
    let jwt = localStorage.getItem('access_token');
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.get(`${this.baseUrl}/user/retrieveAll`, {
      headers: httpHeaders,
    });
  }

  sendEmailForVarification() {
    this.router.navigate(['/varify-email']);
  }

  forgotPassword(user: User) {
    return this.http.post(
      `http://localhost:8083/voyageAffaires/forgetPassword/forgot_password/`,
      user
    );
  }

  resetPassword(user: User, url: string) {
    return this.http.put<any>(this.baseUrl + url, user);
  }
}
