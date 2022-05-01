import { Component, OnInit } from '@angular/core';
import { AcceuilService } from 'src/app/services/acceuil.service';
// import { PartnerService } from '../partner.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listpartnersback',
  templateUrl: './listpartnersback.component.html',
  styleUrls: ['./listpartnersback.component.css']
})
export class ListpartnersbackComponent implements OnInit {
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
    resp.subscribe((datas)=>{
      console.log(datas);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.allPart();
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
