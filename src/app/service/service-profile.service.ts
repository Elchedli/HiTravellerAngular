import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Profile } from 'src/model/Profile';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceProfileService {

  idProfile: number;
  profile:Profile;

  readonly Func_url= 'http://localhost:8083/voyageAffaires/B';
  readonly API_url = 'http://localhost:8083/voyageAffaires/profile';

  constructor(private HttpClient: HttpClient) { }

  getAllProfiles(){
  return this.HttpClient.get(`${this.API_url}/retrieve-all-Profile`)
  }
  getProfileById(idProfile:number) : Observable<Profile>{
    return this.HttpClient.get(`${this.API_url}/retrieve-profile/${idProfile}`).pipe(
      map((profile:Profile)=> profile)
    )
  }
  addProfile(profile : any){

    const formData: FormData = new FormData();
    formData.append('file', profile);
    formData.append('p', JSON.stringify(profile));

    return this.HttpClient.post(`${this.API_url}/add-profile`,formData, {
      reportProgress: true,
      responseType: 'json'
    })
  }
  editProfile(id:number,profile : any){

    return this.HttpClient.put(`${this.API_url}/modify-profile${id}`, profile)
  }
  deleteProfile(idProfile : number){
    return this.HttpClient.delete(`${this.API_url}/remove-profile/${idProfile}`)
  }

  // Functions searching etc ...... ----------- _______________

  getUserByEmail(email: string) {
    return this.HttpClient.get(`${this.Func_url}/searchByProfile/${email}`)
  }
  getUserByCountry(country: string) {
    return this.HttpClient.get(`${this.Func_url}/ProfileByCountry/${country}`)
  }
  getUserByCity(city: string) {
    return this.HttpClient.get(`${this.Func_url}/searchByCity/${city}`)
  }
  searchUser(nom: string) {
    return this.HttpClient.get(`${this.Func_url}/search/${nom}`)
  }
}





