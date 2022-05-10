import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invitation } from '../model/invitation';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class InvitationService {
  private baseUrl = 'http://localhost:8083/voyageAffaires';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  create(invitation: Invitation): Observable<Object> {
    let jwt = localStorage.getItem('access_token');
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.post(`${this.baseUrl}/invitation/add/`, invitation, {
      headers: httpHeaders,
    });
  }

  createInvitation(invitation: Invitation): Observable<Object> {
    let jwt = localStorage.getItem('access_token');
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.post(
      `${this.baseUrl}/invitation/addInvitation`,
      invitation,
      {
        headers: httpHeaders,
      }
    );
  }

  saveImageBase(file: File): Observable<Object> {
    let jwt = localStorage.getItem('access_token');
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.post(`${this.baseUrl}/invitation/saveImage`, file, {
      headers: httpHeaders,
    });
  }

  getInvitation(id: number): Observable<any> {
    let jwt = localStorage.getItem('access_token');
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.get(`${this.baseUrl}/invitation/${id}`, {
      headers: httpHeaders,
    });
  }

  delete(id: number): Observable<any> {
    let jwt = localStorage.getItem('access_token');
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.delete(`${this.baseUrl}/invitation/${id}`, {
      headers: httpHeaders,
    });
  }
  getList(): Observable<any> {
    let jwt = localStorage.getItem('access_token');
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.get(`${this.baseUrl}/invitation/retrieveAll`, {
      headers: httpHeaders,
    });
  }
}
