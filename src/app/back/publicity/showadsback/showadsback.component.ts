import { Component, OnInit } from '@angular/core';
import { AcceuilService } from 'src/app/services/acceuil.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-showaddback',
  templateUrl: './showadsback.component.html',
  styleUrls: ['./showadsback.component.css']
})
export class ShowadsbackComponent implements OnInit {
  // pub: Publicite= new Publicite();
  message:any;
  type: string = 'Remise';
  region: string = 'Global';
  place?: string;
  stats: any;
  listpub: any;
  constructor(private service:AcceuilService) { }
  ngOnInit(): void {
    this.listAd();
    this.getStats();
  }

  public effacerAd(id:number){
    let resp = this.service.DeleteAd(id);
    resp.subscribe((datas)=>{
      console.log(datas);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        });
        this.listAd();
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

  public getStats(){
    let resp = this.service.getstats();
    resp.subscribe((data)=>{
      this.stats = data;
      console.log(data);
    });
    // console.log("data is : "+this.stats[0]);
  }

  public listAd(){
    // console.log("region : "+this.region.toUpperCase()+" type : "+this.type.toUpperCase()+" place : "+this.place);
    let resp =  
      this.region == 'Nationnal' ? this.service.afficherregion({
        pubregion:this.region.toUpperCase(),
        pubtype:this.type.toUpperCase(),
        'country':this.place
      })
      : this.service.afficherregion({
        pubregion:this.region.toUpperCase(),
        pubtype:this.type.toUpperCase()
      });
    resp.subscribe((datas)=>{
      this.listpub =  datas;
      console.log(datas);
    });
    // console.log(this.listpub);
  }

}
