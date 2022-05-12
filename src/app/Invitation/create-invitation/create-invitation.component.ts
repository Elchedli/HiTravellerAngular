import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invitation } from 'src/app/model/invitation';
import { InvitationService } from 'src/app/services/invitation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Component({
  selector: 'app-create-invitation',
  templateUrl: './create-invitation.component.html',
  styleUrls: ['./create-invitation.component.css'],
})
export class CreateInvitationComponent implements OnInit {
  invitation: Invitation = new Invitation();
  registerForm!: FormGroup;
  submitted = false;

  uploadedImage!: File;
  dbImage: any;
  postResponse: any;
  successResponse!: string;
  image: any;

  constructor(
    private invitaionService: InvitationService,
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    let jwt = localStorage.getItem('access_token');
    if (jwt == null || this.authService.isTokenExpired(jwt)) {
      this.router.navigate(['login']);
    }
  }

  save() {
    let jwt = localStorage.getItem('access_token');
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });

    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);
    this.invitation.imageName = this.uploadedImage.name;

    this.httpClient
      .post(
        'http://localhost:8083/voyageAffaires/invitation/saveImage',
        imageFormData,
        {
          headers: httpHeaders,
          observe: 'response',
        }
      )
      .subscribe((response) => {
        if (response.status === 200) {
          this.postResponse = response;
          this.successResponse = this.postResponse.body.message;
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      });

    this.invitaionService.createInvitation(this.invitation).subscribe(
      (data) => {
        console.log(data);
        this.invitation = new Invitation();
        this.gotoList();
        alert('Invitation Added successfully');
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/invitations']);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  public onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
  }

  imageUploadAction() {
    let jwt = localStorage.getItem('access_token');
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });

    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);
    this.invitation.imageName = this.uploadedImage.name;
    this.httpClient
      .post(
        'http://localhost:8083/voyageAffaires/invitation/saveImage',
        imageFormData,
        {
          headers: httpHeaders,
          observe: 'response',
        }
      )
      .subscribe((response) => {
        if (response.status === 200) {
          this.postResponse = response;
          this.successResponse = this.postResponse.body.message;
          alert('c bn');
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      });
  }
}
