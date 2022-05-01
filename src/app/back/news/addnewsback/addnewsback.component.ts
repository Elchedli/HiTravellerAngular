import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AcceuilService } from 'src/app/services/acceuil.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addnewsback',
  templateUrl: './addnewsback.component.html',
  styleUrls: ['./addnewsback.component.css']
})
export class AddnewsbackComponent implements OnInit {
  region: string = 'International';
  // message:any;
  constructor(private service:AcceuilService) { }

  ngOnInit(): void {
  }
  savearticle(f: NgForm){
    console.log(f.value);
    this.ajouterNews(f.value);
  }
  
  public ajouterNews(value:any){
    let resp = this.service.newsajouter(value);
    resp.subscribe((datas)=>{
      console.log(datas);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        });
    }, error => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'The request has not been passed',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }
}
