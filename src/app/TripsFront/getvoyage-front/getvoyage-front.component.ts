import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VoyageService } from '../../services/voyage.service';
import { Voyage } from '../../model/voyage';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-getvoyage-front',
  templateUrl: './getvoyage-front.component.html',
  styleUrls: ['./getvoyage-front.component.css']
})
export class GetvoyageFrontComponent implements OnInit {

  listVoyage!:Voyage[];
  image:Blob=new Blob();
  submitted = true;  
  destionation!:string;
  path="../../assets/images/trips/";
  imageURL!:SafeUrl;
  constructor(private service : VoyageService,private route: ActivatedRoute,private router: Router
    ,private h:HttpClient) { }

  ngOnInit(): void {
    this.submitted = false;
    this.reloadData();
  }

  reloadData() {
    this.service.findAll().subscribe(data => {
      this.listVoyage = data;
    });
 
  }

  details(t:number){
  this.router.navigate(['/detailsTrip/'+t]); 
  }

   
  onSubmit() {
    this.submitted = true;
    this.search(this.destionation);    
  }

  search(des:string)
  {
    this.service.SearchDestionation(des).subscribe(data => {
      this.listVoyage = data;
    });
  }

}
