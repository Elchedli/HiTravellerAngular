import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AcceuilService } from 'src/app/acceuil.service';

@Component({
  selector: 'app-addrecom',
  templateUrl: './addrecom.component.html',
  styleUrls: ['./addrecom.component.css']
})
export class AddrecomComponent implements OnInit {
  // country: string = 'Tunisia';
  // categorie: string = 'Hotel';
  // avis do some work on it
  message:any;
  constructor(private service:AcceuilService) { }

  ngOnInit(): void {
  }
  saverecommandation(f: NgForm){
    console.log(f.value);
    f.value['recomAvis'] = 'bas';
    this.addRecom(f.value);
  }

  public addRecom(value:any){
    let resp = this.service.recomajouter(value);
    resp.subscribe((data)=>this.message = data);
  }
}
