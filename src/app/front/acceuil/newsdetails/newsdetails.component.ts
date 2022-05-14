import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcceuilService } from 'src/app/services/acceuil.service';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrls: ['./newsdetails.component.css']
})
export class NewsdetailsComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  constructor(private service: AcceuilService, private route: ActivatedRoute) { }
  listnews:any;
  ngOnInit(): void {
    this.searchAd();
  }

  public searchAd(){
    let resp =  this.service.searchNews(this.id);
    resp.subscribe((datas)=>{
      this.listnews =  datas;
      console.log(datas);
    });
    // console.log(this.listpub);
  }
}
