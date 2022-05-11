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
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private dialog : MatDialog,private service:CompanyService, private ser:ServiceProfileService) { }


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
  dialogEditProfile(idProfile : number){
    this.dialog.open(EditProfileComponent)
    width: '60%'
  }
  dialogDeleteProfile(idProfile : number){
    const dialogRef = this.dialog.open(DeleteProfileComponent,{
      width : '40%',
      panelClass: 'my-dialog'
    });
    this.idProfile = this.route.snapshot.params['id'];
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
  hideAccount(){

  }
  deleteForEver(){

  }
  applyFilter($event){
   /*  const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceCompany.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceCompany.paginator) {
      this.dataSourceCompany.paginator.firstPage(); */
  }
  /* this.dataSourceProfile.filter = filterValue.trim().toLowerCase();

  if (this.dataSourceProfile.paginator) {
    this.dataSourceProfile.paginator.firstPage(); */
/* } */
   /*  } */
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
