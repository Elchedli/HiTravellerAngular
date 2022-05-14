import { EditCompanyComponent } from './../edit-company/edit-company.component';


import { ManageAccountService } from './../service/manage-account.service';
import { DeleteProfileComponent } from './../delete-profile/delete-profile.component';
import { CompanyService } from './../company.service';
import { Company } from './../../model/Company';
import { ServiceProfileService } from './../service/service-profile.service';
import { CreateCompanyComponent } from './../create-company/create-company.component';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateProfileComponent } from '../create-profile/create-profile.component';
import { Profile } from 'src/model/Profile';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import "@angular/compiler";
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  displayedColumnsCompany: string[] = ['id', 'nameCompany', 'Email', 'logo'];
  dataSourceCompany: MatTableDataSource<Company>;
  dataSourceProfile: MatTableDataSource<Profile>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  companyList:Company[]
  listProfile:Profile[]
  idProfile: number
  profile!:Profile
  company!:Company
  idCompany: number

  constructor(private route: ActivatedRoute,private manager: ManageAccountService,private router:Router, private dialog : MatDialog,private service:CompanyService, private ser:ServiceProfileService) { }


  ngOnInit(): void {
    this.company={
idCompany: null,
nameCompany: null,
email: null,
country: null,
contactPerson:null,
positionInCompany:null,
city: null,
street: null,
postalCode:null,
webAdress:null,
logo:null,
suffix:null,
phone: null,
fax: null,
yearEstablished:null,
status:null,
type:null,
listReferences:null,
createdTime:null,
verificationCode:null,
activity:null,
enabled: null,
language: null,
deleted: null
    }
    this.profile = {
      idProfile: null,
      salutation:null,
      nom: null,
      prenom: null,
      email: null,
      birthdate: null,
      createdTime:null,
      country: null,
      city: null,
      address: null,
      photo: null,
      suffix:null,
      phone: null,
      phone2: null,
      bio: null,
      profession: null,
      nationality: null,
      activity: null,
      deleted: null,
      enabled: null,
      language: null
      }
    this.service.getAllCompanies().subscribe(
      (data : Company[]) => (this.companyList = data)
    )
    this.ser.getAllProfiles().subscribe(
      (datap : Profile[]) => (this.listProfile = datap)
    )

  }
  dialogEditProfile(id ){
this.router.navigate(['/editProfile/'+id]);
    /* this.dialog.open(EditProfileComponent,id)
    width: '60%' */
  }

  dialogEditCompany(id ){
    /* this.router.navigate(['/editProfile/'+id]); */
    this.dialog.open(EditCompanyComponent)
    width: '60%'
  }
  dialogDeleteProfile(idProfile : number){

    const dialogRef = this.dialog.open(DeleteProfileComponent,{
      width : '40%',
      panelClass: 'my-dialog'
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    /* let resp = this.manager.hideProfile(idProfile);
    resp.subscribe(
      (datas) => {
        console.log(datas);
        ({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
        this.ser.getAllProfiles().subscribe(
          (datap : Profile[]) => (this.listProfile = datap)
        )
      },
      (error) => {
        ({
          position: 'center',
          icon: 'error',
          title: 'The request has not been passed',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    ); */



  }
  deleteForEverCompany(id){
    let resp = this.manager.deleteCompany(id);
    resp.subscribe(
      (data) => {
        console.log(data);
      });
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'This company has been deleted.',
            'success'
          )
        }
      })
      this.ngOnInit();
  }
  deleteForEver(id) {
    let resp = this.manager.deleteProfile(id);
    resp.subscribe(
      (data) => {
        console.log(data);
      });
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'This user has been deleted.',
            'success'
          )
        }
      })
      this.ngOnInit();

  }
  hideAccountCompany(idCompany){
    let resp = this.manager.hideCompany(idCompany);
    resp.subscribe(
      (data) => {
        console.log(data);
        Swal.fire ({
          position: 'center',
          icon: 'success',
          title: 'This Company has been hidden',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'The request has not been passed',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    )
    this.ngOnInit();
  }
  hideAccount(id){
    let resp = this.manager.hideProfile(id);
    resp.subscribe(
      (data) => {
        console.log(data);
        Swal.fire ({
          position: 'center',
          icon: 'success',
          title: 'This user has been hidden',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'The request has not been passed',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    )
    this.ngOnInit();
  }


    openDialogProfile(){
      this.dialog.open(CreateProfileComponent,{
        width : '60%'
      })
    }
    openDialogCompany(){
    this.dialog.open(CreateCompanyComponent,{
      width:'60%'
    })
  }

}
