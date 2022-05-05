import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VoyageService } from '../../services/voyage.service';
import { Voyage } from '../../model/voyage';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-getmy-trips',
  templateUrl: './getmy-trips.component.html',
  styleUrls: ['./getmy-trips.component.css']
})
export class GetmyTripsComponent implements OnInit {

  listVoyage!:Voyage[];
  listVoyage2:Voyage[]=[];
  image:Blob=new Blob();
  path="../../assets/images/trips/";
  imageURL!:SafeUrl;
  constructor(private service : VoyageService,private route: ActivatedRoute,private router: Router
    ,private h:HttpClient) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.service.findAll().subscribe(data => {
      this.listVoyage = data;
      this.listVoyage.forEach(v => { if (v.entreprise.id==1)
      { this.listVoyage2.push(v);}}
      )
    });
 
  }

  details(t:number){
    alert(t);
  this.router.navigate(['/detailsTrip/'+t]); 
  }

  users(t:number){
  this.router.navigate(['/listEmployee/'+t]); 
  }

  pdf() {//u need to add to ()
    this.service.pdfCompany(1).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
        alert("Pdf Added successfully you will be able to see it on your desktop");  
      },
      (error) => console.log(error)
    );
 
  }

}
