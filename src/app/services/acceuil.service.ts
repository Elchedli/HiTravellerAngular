import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AcceuilService {
  constructor(private http: HttpClient) {}
  //partie partenaire
  public afficherpartner() {
    return this.http.post<any>(
      'http://localhost:8083/voyageAffaires/acceuil/listPartenaires',
      {}
    );
  }
  public ajouterpartner(jsonData: Object) {
    return this.http.post<any>(
      'http://localhost:8083/voyageAffaires/acceuil/ajouterPartner',
      jsonData,
      { responseType: 'text' as 'json' }
    );
  }

  public effacerpart(name: string) {
    return this.http.get(
      'http://localhost:8083/voyageAffaires/acceuil/DeletePartner/' + name,
      { responseType: 'text' as 'json' }
    );
  }

  // Partie publicitée
  public ajouterAd(Publicite: any) {
    return this.http.post(
      'http://localhost:8083/voyageAffaires/acceuil/ajouterAd',
      Publicite,
      { responseType: 'text' as 'json' }
    );
  }

  public DeleteAd(number: number) {
    return this.http.get(
      'http://localhost:8083/voyageAffaires/acceuil/DeleteAd/' + number,
      { responseType: 'text' as 'json' }
    );
  }

  public getstats() {
    return this.http.get('http://localhost:8083/voyageAffaires/acceuil/Stats');
  }

  public afficherregion(jsonData: Object) {
    return this.http.post<any>(
      'http://localhost:8083/voyageAffaires/acceuil/AdRegion',
      jsonData
    );
  }

  public afficherregionlocation(jsonData: Object) {
    return this.http.post<any>(
      'http://localhost:8083/voyageAffaires/acceuil/adLocation',
      jsonData
    );
  }
  //Partie Article
  public newsafficherregion(region: string) {
    return this.http.get(
      'http://localhost:8083/voyageAffaires/acceuil/newsAllRegion/' + region
    );
  }
  public newsajouter(jsonData: Object) {
    return this.http.post<any>(
      'http://localhost:8083/voyageAffaires/acceuil/ajouterNews',
      jsonData
    );
  }

  public newsAll() {
    return this.http.post<any>('http://localhost:8083/pi/acceuil/NewsAll', {});
  }

  public deleteNews(id: number) {
    return this.http.get(
      'http://localhost:8083/voyageAffaires/acceuil/deleteNews/' + id,
      { responseType: 'text' as 'json' }
    );
  }

  //make delete news
  //make modify news

  //recommandation
  public recomajouter(dataJson: object) {
    return this.http.post(
      'http://localhost:8083/voyageAffaires/acceuil/ajouterRecom',
      dataJson,
      { responseType: 'text' as 'json' }
    );
  }
  public recomafficher(dataJson: object) {
    return this.http.post(
      'http://localhost:8083/voyageAffaires/acceuil/listRecomAvis/',
      dataJson
    );
  }
  public recomAll(categorie: string) {
    return this.http.get(
      'http://localhost:8083/voyageAffaires/acceuil/listRecom/' + categorie
    );
  }

  public recomGet(id: number) {
    return this.http.get(
      'http://localhost:8083/voyageAffaires/acceuil/getRecom/' + id
    );
  }

  public recomdelete(id: number) {
    return this.http.get(
      'http://localhost:8083/voyageAffaires/acceuil/DeleteRecom/' + id,
      { responseType: 'text' as 'json' }
    );
  }
  //GLOBAL

  public getLocation() {
    return this.http.get(
      'http://localhost:8083/voyageAffaires/acceuil/location'
    );
  }

  //Partie messagerie

  public addDiscussion(dataJson: object) {
    return this.http.post(
      'http://localhost:8083/voyageAffaires/message/addDiscussion',
      dataJson
    );
  }

  public enterDiscussion(dataJson: object) {
    return this.http.post(
      'http://localhost:8083/voyageAffaires/message/EnterDiscussion',
      dataJson
    );
  }

  public addMessage(dataJson: object) {
    return this.http.post(
      'http://localhost:8083/voyageAffaires/message/sendMessage',
      dataJson
    );
  }


  //search elements
  public searchRecom(id:any) {
    return this.http.get(
      'http://localhost:8083/voyageAffaires/acceuil/searchRecom/'+id
    );
  }

  public searchNews(id:any) {
    return this.http.get(
      'http://localhost:8083/voyageAffaires/acceuil/searchNews/'+id
    );
  }

  public searchAd(id:any) {
    return this.http.get(
      'http://localhost:8083/voyageAffaires/acceuil/searchAd/'+id
    );
  }
}
