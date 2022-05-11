import { Company } from './../../model/Company';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  companyForm !: FormGroup;
  //company: Company;

  constructor (private formBuilder:FormBuilder, private service : CompanyService) { } //, private dialogRef: MatDialogRef<Company>
  ngOnInit(): void {
    /* this.company=new Company(); */
    this.companyForm = this.formBuilder.group({
      companyName : ['', Validators.required],
      Email : ['', Validators.required],
      logo : ['', Validators.required]

    })
  }
  addCompany(){
    console.log(this.companyForm.value);
    //this.service.addCompany(this.companyForm)
  }
  currentDate = new Date();

  form = new FormGroup({
    dateYMD: new FormControl(new Date()),
    dateFull: new FormControl(new Date()),
    dateMDY: new FormControl(new Date()),
    dateRange: new FormControl([
      new Date(),
      new Date(this.currentDate.setDate(this.currentDate.getDate() + 7))
    ])
  });




save(){

}

/*   save(){

    let resp = this.service.addCompany(this.company);

    resp.subscribe((datas)=>{
      console.log(datas);

     Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'the new company has been added',
      showConfirmButton: false,
      timer: 1500

    })
    },err=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'The request has not been passed',
        showConfirmButton: false,
        timer: 1500
      })
console.error();
    });
    console.log("Company added with success.. okk")
  } */
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      logo: file,
    });
    this.form.get('logo').updateValueAndValidity();
  }

  }


