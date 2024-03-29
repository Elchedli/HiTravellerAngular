import { Component, OnInit } from '@angular/core';
import { AcceuilService } from 'src/app/services/acceuil.service';
@Component({
  selector: 'app-shownews',
  templateUrl: './shownews.component.html',
  styleUrls: ['./shownews.component.css']
})
export class ShownewsComponent implements OnInit {
  message:any;
  region:string = 'International';
  listarticle: any;
  constructor(private service:AcceuilService) { }

  ngOnInit(): void {
    this.listnewsregion();
  }

  public listnewsregion(){
    let resp = this.service.newsafficherregion(this.region);
    resp.subscribe((datas)=>{
      this.listarticle =  datas;
      console.log(datas);
    });
    // console.log(this.listarticle);
  }
}
