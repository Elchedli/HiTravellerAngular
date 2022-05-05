import { Injectable } from '@angular/core';
import { Voyage } from '../model/voyage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

 private baseUrl = "http://localhost:8083/voyageAffaires/voyage";

  constructor(private http: HttpClient) {}

  getVoyageList(){
    return this.http.get("http://localhost:8083/voyageAffaires/voyage/getVoyages");
  }
  public findAll(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>("http://localhost:8083/voyageAffaires/voyage/getVoyages");
  }

  GetEmployee(id:number): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/getEmployee/${id}`);
  }

  SearchDestionation(destination:String): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(`${this.baseUrl}/findVDestionation/${destination}`);
  }

  public pdfAll() {
    return this.http.get("http://localhost:8083/voyageAffaires/voyage/afficherPDFALL");
  }

  public pdfCompany(id:number) {
    return this.http.get(`${this.baseUrl}/afficherPDF/${id}`);
  }
  public addEmployeeToVoyage(idVoyage:number,idemployee:number): Observable<String>{
    return this.http.get<String>(`${this.baseUrl}/addEmployee/${idVoyage}/${idemployee}`);
  }
 /* getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${id}`);
  }
*/
  createVoyage(voyage: Voyage): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addVoyage`,voyage);
  }

  saveImageBase(file:File): Observable<Object> {
    return this.http.post(`${this.baseUrl}/saveImage`,file);
  }
  


  updateVoyage(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updateVoyage/${id}`, value);
  }

  getOneVoyage(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/getonetrip/${id}`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteVoyage/${id}`, {
      responseType: 'text',
    });
  }



 

}
