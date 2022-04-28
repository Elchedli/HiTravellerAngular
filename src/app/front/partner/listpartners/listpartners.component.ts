import { Component, OnInit } from '@angular/core';
import { AcceuilService } from 'src/app/acceuil.service';
// import { PartnerService } from '../partner.service';

@Component({
  selector: 'app-listpartners',
  templateUrl: './listpartners.component.html',
  styleUrls: ['./listpartners.component.css']
})
export class ListpartnersComponent implements OnInit {
  // pub: Partner = new Partner();
  message:any;
  listpart: any;
  constructor(private service:AcceuilService) { }

  ngOnInit(): void {
    this.allPart();
  }
  public allPart(){
    let resp = this.service.afficherpartner();
    resp.subscribe((datas)=>{
      this.listpart =  datas;
      console.log(datas);
    });
  }

  public deletePart(name:string){
    let resp = this.service.effacerpart(name);
    resp.subscribe((datas => this.message =  datas));
  }
}
