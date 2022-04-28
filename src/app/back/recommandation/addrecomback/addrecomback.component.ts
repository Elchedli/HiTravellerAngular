import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AcceuilService } from 'src/app/services/acceuil.service';

@Component({
  selector: 'app-addrecomback',
  templateUrl: './addrecomback.component.html',
  styleUrls: ['./addrecomback.component.css']
})
export class AddrecombackComponent implements OnInit {
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
