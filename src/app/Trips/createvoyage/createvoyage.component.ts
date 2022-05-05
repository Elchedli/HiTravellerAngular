import { Component, OnInit } from '@angular/core';
import { Voyage } from '../../model/voyage';
import { VoyageService } from '../../services/voyage.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createvoyage',
  templateUrl: './createvoyage.component.html',
  styleUrls: ['./createvoyage.component.css']
})
export class CreatevoyageComponent implements OnInit {

  voyage: Voyage = new Voyage();
  registerForm!: FormGroup;
  submitted = false;

  
  uploadedImage!: File;
  dbImage: any;
  postResponse: any;
  successResponse!: string;
  image: any;

  constructor(private service: VoyageService,private router: Router,private httpClient: HttpClient,private formBuilder: FormBuilder) { }

  
  ngOnInit() {
   
  
  }


  newEmployee(): void {
    this.submitted = false;
    
    this.voyage = new Voyage();
  }

  save() {
    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);
    this.voyage.imageName=this.uploadedImage.name;

    this.httpClient.post('http://localhost:8083/voyageAffaires/voyage/saveImage', imageFormData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.postResponse = response;
          this.successResponse = this.postResponse.body.message;
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      }
      );
    
      this.voyage.entreprise.id=5;

    this.service.createVoyage(this.voyage).subscribe(data => {
      console.log(data)
      this.voyage = new Voyage();
      this.gotoList();
      alert("Trip Added successfully");
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/voyage']);
  }
 



  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }


  public onImageUpload(event:any) {
    this.uploadedImage = event.target.files[0];
  }

  imageUploadAction() {
    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);
    this.voyage.imageName=this.uploadedImage.name;
  
    this.httpClient.post('http://localhost:8083/voyageAffaires/voyage/saveImage', imageFormData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.postResponse = response;
          this.successResponse = this.postResponse.body.message;
          alert("c bn");
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      }
      );
    }

    viewImage() {
      this.httpClient.get('http://localhost:8080/get/image/info/' + this.image)
        .subscribe(
          res => {
            this.postResponse = res;
            this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
          }
        );
    }


  
    

   
}
