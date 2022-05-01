import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AcceuilService } from 'src/app/services/acceuil.service';
// import { PartnerService } from '../partner.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajoutpartnerback',
  templateUrl: './ajoutpartnerback.component.html',
  styleUrls: ['./ajoutpartnerback.component.css']
})
export class AjoutpartnerbackComponent implements OnInit {
  message: any;
  constructor(private service:AcceuilService) { }
  ngOnInit(): void {
  }
  savepart(f: NgForm){
    console.log(f.value);
    this.addPart(f.value);
  }

  public addPart(value:any){
    let resp = this.service.ajouterpartner(value);
    resp.subscribe((datas)=>{
      console.log(datas);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
    }, error => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'The request has not been passed',
        showConfirmButton: false,
        timer: 1500
      })
  });
}
}
