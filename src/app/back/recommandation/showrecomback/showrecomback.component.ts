import { Component, OnInit } from '@angular/core';
import { AcceuilService } from 'src/app/services/acceuil.service';

@Component({
  selector: 'app-showrecomback',
  templateUrl: './showrecomback.component.html',
  styleUrls: ['./showrecomback.component.css']
})
export class ShowrecombackComponent implements OnInit {
  message:any;
  // region:string = 'International';
  country :string = "";
  categorie: string = 'Coffees';
  listrecom: any;
  constructor(private service:AcceuilService) { }

  ngOnInit(): void {
    this.listRecomAvis();
  }


  public deleteRecom(id:number){
    let resp = this.service.recomdelete(id);
    resp.subscribe((datas)=>{
      this.message =  datas;
      console.log(datas);
    });
    // this.listRecomAvis();
    // console.log(this.listarticle);
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
