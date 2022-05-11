import { ServiceProfileService } from './../service/service-profile.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/model/Profile';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})

export class CreateProfileComponent implements OnInit {

  profile: Profile;
  listProfile:any;
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  imagePath :any;
  imgURL : any;
  crud: any;
  constructor(private ser:ServiceProfileService) { }

  ngOnInit(): void {
    this.profile= new Profile()
  }

  save(){
    console.log();

    this.profileData();
    this.ngOnInit;
  }
  public profileData(){
    const formData = new FormData();
    formData.append('p', JSON.stringify(this.profile));
    formData.append('file',this.profile.photo)

    let resp = this.ser.addProfile(formData);

    resp.subscribe((datas)=>{
      this.listProfile =  datas;
      console.log(datas);

     // this.router.navigate(['/viewProfile']);

    });
    // console.log(this.listarticle);
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  onSelectFile(event){
    if (event.target.files.length > 0){
      const file = event.target.files[0];
      this.profile.photo = file;
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null){
        this.message = "Only images are supported.";
        return;
      }
      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.imgURL= reader.result;
      }
    }
  }

}
