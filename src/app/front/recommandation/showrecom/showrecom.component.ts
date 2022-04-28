import { Component, OnInit } from '@angular/core';
import { AcceuilService } from 'src/app/acceuil.service';

@Component({
  selector: 'app-showrecom',
  templateUrl: './showrecom.component.html',
  styleUrls: ['./showrecom.component.css']
})
export class ShowrecomComponent implements OnInit {
  message:any;
  // region:string = 'International';
  country :string = "";
  categorie: string = 'Coffees';
  listrecom: any;
  constructor(private service:AcceuilService) { }

  ngOnInit(): void {
    this.listRecomAvis();
  }

  public listRecomAvis(){
    let resp = this.service.recomafficher({
      "categorie":this.categorie,
      "country": this.country
    });
    resp.subscribe((datas)=>{
      this.listrecom =  datas;
      console.log(datas);
    });
    // console.log(this.listarticle);
  }

}
