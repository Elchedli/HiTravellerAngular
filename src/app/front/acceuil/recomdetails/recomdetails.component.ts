import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcceuilService } from 'src/app/services/acceuil.service';

@Component({
  selector: 'app-recomdetails',
  templateUrl: './recomdetails.component.html',
  styleUrls: ['./recomdetails.component.css'],
})
export class RecomdetailsComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  listrecom:any;
  constructor(private service: AcceuilService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("where is the id? : "+this.id);
    this.searchDetails()
  }

  public searchDetails(){
    let resp =  this.service.searchRecom(this.id);
    resp.subscribe((datas)=>{
      this.listrecom =  datas;
      console.log(datas);
    });
    // console.log(this.listpub);
  }
}
