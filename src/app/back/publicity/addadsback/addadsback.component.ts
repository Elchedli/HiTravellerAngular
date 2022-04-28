import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AcceuilService } from 'src/app/services/acceuil.service';
// import {Country} from '@angular-material-extensions/select-country'; 
@Component({
  selector: 'app-addadsback',
  templateUrl: './addadsback.component.html',
  styleUrls: ['./addadsback.component.css']
})
export class AddadsbackComponent implements OnInit {
  region:string = "Global";
  type:string = "Remise";
  country:string  = "Tunisia";
  message: any;
  constructor(private service:AcceuilService) { }

  ngOnInit(): void {
  }

  // onCountrySelected(country: Country) {
  //   console.log(country);
  // }

  save(f: NgForm){
    console.log(f.value);
    f.value['pubRegion'] = f.value['pubRegion'].toUpperCase();
    f.value['pubType'] = f.value['pubType'].toUpperCase();
    this.ajouterAd(f.value);
  }
  // submit({value,valid}: {value:User,valid:boolean}){
  //   this.user = value;
  //   console.log(this.user);
  // }

  public ajouterAd(value:any){
    let resp = this.service.ajouterAd(value);
    resp.subscribe((data)=>this.message = data);
  }
}