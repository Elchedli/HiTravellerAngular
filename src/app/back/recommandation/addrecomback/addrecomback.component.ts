import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AcceuilService } from 'src/app/services/acceuil.service';
import Swal from 'sweetalert2';
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
  })
  }
}
