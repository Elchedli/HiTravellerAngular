import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AcceuilService } from 'src/app/services/acceuil.service';
import Swal from 'sweetalert2';
// import {Country} from '@angular-material-extensions/select-country';
@Component({
  selector: 'app-addadsback',
  templateUrl: './addadsback.component.html',
  styleUrls: ['./addadsback.component.css'],
})
export class AddadsbackComponent implements OnInit {
  region: string = 'Global';
  type: string = 'Remise';
  country: string = 'Tunisia';
  message: any;
  constructor(private service: AcceuilService) {}

  ngOnInit(): void {}

  // onCountrySelected(country: Country) {
  //   console.log(country);
  // }

  save(f: NgForm) {
    console.log(f.value);
    f.value['pubRegion'] = f.value['pubRegion'].toUpperCase();
    f.value['pubType'] = f.value['pubType'].toUpperCase();
    this.ajouterAd(f.value);
  }
  // submit({value,valid}: {value:User,valid:boolean}){
  //   this.user = value;
  //   console.log(this.user);
  // }

  public ajouterAd(value: any) {
    if (value['pubRegion'] == 'GLOBAL') value['country'] = 'Global';
    console.log('value est : ' + value['country']);
    let resp = this.service.ajouterAd(value);
    resp.subscribe(
      (datas) => {
        console.log(datas);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'The request has not been passed',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
