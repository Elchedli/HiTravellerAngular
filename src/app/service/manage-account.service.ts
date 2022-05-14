import { SearchCountryField } from 'ngx-intl-tel-input';
import { Observable } from 'rxjs';
import { Company } from './../../model/Company';
import { Profile } from 'src/model/Profile';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageAccountService {

  constructor(private http: HttpClient ) { }
  api: string = 'http://localhost:8083/voyageAffaires'

  getAllUsers() : Observable<Profile[]> {
    return this.http.get<Profile[]>(this.api+'/getAllUsers')
  }
  getAllActiveUsers() {
    return this.http.get<Profile[]>(this.api+'/getAllActiveUsers')
  }
  getAllCompanies() : Observable<Company[]>{
    return this.http.get<Company[]>(this.api+'/getAllCompany')
  }
  getAllActiveCompanies() : Observable<Company[]>{
    return this.http.get<Company[]>(this.api+'/getAllActiveCompany')
  }
  getProfileById(id) : Observable<Profile> {
    return this.http.get<Profile>(this.api + '/profileById/' + id)
  }
  getCompanyById(id) : Observable<Company> {
    return this.http.get<Company>(this.api + '/companyById/' + id)
  }
  addCompany(company: Company) {
    return this.http.post(this.api + '/addCompany', company)
  }
  addProfile(profile: Profile) {
    return this.http.post(this.api + '/addProfile', profile)
  }
  deleteProfile(id) {
    return this.http.delete(this.api + '/deleteProfile/' + id)
  }
  deleteCompany(id: number) {
    return this.http.delete(this.api + '/deleteCompany/' + id)
  }
  hideCompany(id)  {
    return this.http.put(this.api + '/masquerCompany/' +id ,id)
  }
  hideProfile(id) {
    return this.http.put(this.api + '/masquerProfile/' +id ,id)
  }
  editProfile(id)  {
    return this.http.put(this.api + '/editProfile/' +id, id)
  }
  editCompany(id) {
    return this.http.put(this.api + '/editCompany/' +id, id)
  }
  searchProfile(value : string) : Observable<Profile[]> {
    return this.http.get<Profile[]>(this.api+'/searchByProfile/'+value)
  }
  searchCompany(value : string) : Observable<Company[]> {
    return this.http.get<Company[]>(this.api+'/searchByCompany/'+value)
  }
  SearchCompanyActive(value: string) {
    return this.http.get<Company[]>(this.api+'/searchFromCompanyActive/'+value)
  }
  searchProfileActive(value : string)  {
    return this.http.get<Profile[]>(this.api+'/searchFromProfileActive/'+value)
  }
  searchFromLocationProfile(value : string)  {
    return this.http.get<Profile[]>(this.api+'/searchFromLocationProfile/'+value)
  }

}
