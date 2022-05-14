import { ManageAccountService } from './../service/manage-account.service';
import { Company } from './../../model/Company';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  companyForm !: FormGroup;
  company: Company = new Company;
  list:any;
  constructor (private service:ManageAccountService, private matDialogReference:MatDialogRef<Company>) { } //, private dialogRef: MatDialogRef<Company>

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(
      (data)=>{
        this.list = data;
      }
    )
  }

  save(){

    let resp = this.service.addCompany(this.company);

    resp.subscribe((datas)=>{
      console.log(datas);
     /*  this.company=new Company(); */
      this.matDialogReference.close([]);
     Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'the new company has been added',
      showConfirmButton: false,
      timer: 1500

    })
    },err=>{
      //this.service.sendEmailNotify(this.company.email);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'This account already exist',
        showConfirmButton: false,
        timer: 1500
      })

    });
    console.log("Company added with success.. okk")
  }


  }


