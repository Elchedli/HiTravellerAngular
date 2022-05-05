import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VoyageService } from '../../services/voyage.service';
import { Voyage } from '../../model/voyage';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-getvoyage',
  templateUrl: './getvoyage.component.html',
  styleUrls: ['./getvoyage.component.css']
})
export class GetvoyageComponent implements OnInit {
  
  listVoyage!:Voyage[];
  path="../../assets/images/trips/";
  URL: string = `https://fireflysemantics.github.io/i/service-parts-help/electrocardiogram-36732.png`;
  image:Blob=new Blob();
  imageURL!:SafeUrl;
  imageBlobUrl!: string | ArrayBuffer | null ;
  constructor(private service : VoyageService,private route: ActivatedRoute,private router: Router
    ,private sanitizer: DomSanitizer,private h:HttpClient) {}

  ngOnInit() {
    this.reloadData();
    this.loadImage().subscribe(i=>
      {
        this.image = i
        this.imageURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.image))
      })
      
  }

  reloadData() {
    this.service.findAll().subscribe(data => {
      this.listVoyage = data;
    });
 
  }

  pdf() {
    this.service.pdfAll().subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
        alert("Pdf Added successfully you will be able to see it on your desktop");  
      },
      (error) => console.log(error)
    );
 
  }
  

  deleteVoyage(id: number) {
    this.service.deleteUser(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
        alert("Trip deleted successfully");  
      },
      (error) => console.log(error)
    );
  }

  updatevoyage(id: number) {
      this.router.navigate(['/voyage/updatevoyage', id]);
  }

  save(){
    this.router.navigate(['/add']);
}



loadImage():Observable<Blob> {
  return this.h.get("http://localhost:8083/voyageAffaires/voyage/image", {
  responseType: "blob"
});}





}
