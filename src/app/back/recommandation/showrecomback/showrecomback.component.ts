import { Component, OnInit } from '@angular/core';
import { AcceuilService } from 'src/app/services/acceuil.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-showrecomback',
  templateUrl: './showrecomback.component.html',
  styleUrls: ['./showrecomback.component.css']
})
export class ShowrecombackComponent implements OnInit {
  message:any;
  // region:string = 'International';
  country :string = "";
  categorie: string = 'Coffees';
  listrecom: any;
  constructor(private service:AcceuilService) { }

  ngOnInit(): void {
    this.listeRecom();
  }


  public deleteRecom(id:number){
    let resp = this.service.recomdelete(id);
    resp.subscribe((datas)=>{
      console.log(datas);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.listeRecom();
    }, error => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'The request has not been passed',
        showConfirmButton: false,
        timer: 1500
      })
  })
  };
  public listeRecom(){
    let resp = this.service.recomafficher({
      "categorie":this.categorie,
      "country": this.country
    });
    resp.subscribe((datas)=>{
      this.listrecom =  datas;
      // console.log(datas);
    });
    // console.log(this.listarticle);
  }

}
