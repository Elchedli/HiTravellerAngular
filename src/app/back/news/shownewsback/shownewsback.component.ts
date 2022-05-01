import { Component, OnInit } from '@angular/core';
import { AcceuilService } from 'src/app/services/acceuil.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-shownewsback',
  templateUrl: './shownewsback.component.html',
  styleUrls: ['./shownewsback.component.css']
})
export class ShownewsbackComponent implements OnInit {
  message:any;
  region:string = 'International';
  listarticle: any;
  constructor(private service:AcceuilService) { }

  ngOnInit(): void {
    this.listnewsregion();
  }

  public effacerNews(id:number){
    let resp = this.service.deleteNews(id);
    resp.subscribe((datas)=>{
      console.log(datas);
      if(datas == "true"){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.listnewsregion();
      }else{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'The request has not been passed',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }, error => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'The request has not been passed',
        showConfirmButton: false,
        timer: 1500
      })
  });
    // let test = this.message;
  }
  public listnewsregion(){
    let resp = this.service.newsafficherregion(this.region);
    resp.subscribe((datas)=>{
      this.listarticle =  datas;
      console.log(datas);
    });
    // console.log(this.listarticle);
  }
}
