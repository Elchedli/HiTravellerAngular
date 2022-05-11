import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from './../model/Company';
import { Injectable } from '@angular/core';

const httpOptions : any    = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/json',
    //'Access-Control-Allow-Headers': 'Content-Type',
    //'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  readonly API_url = 'http://localhost:8083/voyageAffaires/company';

  company:Company;



  constructor(private HttpClient:HttpClient)  { }

  getAllCompanies(): Observable<Company[]>{
    return this.HttpClient.get<Company[]>(`${this.API_url}/retrieveAll`)
  }


  getCompanyById(idCompany:number){
    return this.HttpClient.get(`${this.API_url}/retrieveById/${idCompany}`)
  }
  addCompany(Company : any){
    return this.HttpClient.post(`${this.API_url}/addC`, Company)
  }

}
