import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { AcceuilService } from 'src/app/services/acceuil.service';
// import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-acceuilfront',
  templateUrl: './acceuilfront.component.html',
  styleUrls: ['./acceuilfront.component.css'],
})
export class AcceuilfrontComponent implements OnInit {
  pageRecom: number[] = [1, 0];
  countryRecom: string = '';
  categorieRecom: string = 'Restoration';
  listrecom: any;
  //ADS
  pagePub: number[] = [1, 0];
  typeAds: string = 'Global';
  offreAds: string = 'Remise';
  placeAds: any;
  // stats: any;
  listpub: any;
  idtemplate: string = 'pagination2';
  //NEWS
  listarticle: any;
  regionArticle: string = 'International';
  newslimiter: number = 3;

  constructor(private service: AcceuilService) {}
  ngOnInit(): void {
    this.listeRecom();
    this.listAd();
    this.listnewsregion();
  }

  public listeRecom() {
    let resp = this.service.recomafficher({
      categorie: this.categorieRecom,
      country: this.countryRecom,
    });
    resp.subscribe((datas) => {
      this.listrecom = datas;
      console.log((<any>datas).length);
      this.pageRecom[1] = (<any>datas).length;
    });
  }

  // searchRecom(){

  // }
  public listAd() {
    let resp: any;
    // console.log("l'offre est :  " + this.typeAds);
    if (this.typeAds == 'Nationnal') {
      resp = this.service.afficherregionlocation({
        pubregion: this.typeAds.toUpperCase(),
        pubtype: this.offreAds.toUpperCase(),
      });
    } else {
      resp = this.service.afficherregion({
        pubregion: this.typeAds.toUpperCase(),
        pubtype: this.offreAds.toUpperCase(),
      });
    }

    resp.subscribe((datas) => {
      this.listpub = datas;
      this.pagePub[1] = (<any>datas).length;
    });
  }

  // public getLocation() {
  //   this.service.getLocation().subscribe((datas) => {
  //     this.placeAds = datas;
  //     console.log('this place data : ' + datas);
  //   });
  //   debugger;
  // }

  public listnewsregion() {
    this.service.newsafficherregion(this.regionArticle).subscribe((datas) => {
      this.listarticle = datas;
      console.log(datas);
    });
    // console.log(this.listarticle);
  }

  public moreNews() {
    this.newslimiter += 3;
  }
}
