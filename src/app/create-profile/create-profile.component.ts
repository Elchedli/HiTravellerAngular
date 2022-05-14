import { ManageAccountService } from './../service/manage-account.service';
import { ServiceProfileService } from './../service/service-profile.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/model/Profile';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})

export class CreateProfileComponent implements OnInit {

  profile: Profile= new Profile;
  listProfile:any;
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  imagePath :any;
  imgURL : any;
  crud: any;




  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});


  constructor(private ser:ServiceProfileService, private service:ManageAccountService) { }

  ngOnInit(): void {

  }

  save(){
    console.log();

    this.service.addProfile(this.profile).subscribe(
      (data) => {
        console.log(data);
        this.profile = new Profile();
      },
      (error) => console.log(error)
    );

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
