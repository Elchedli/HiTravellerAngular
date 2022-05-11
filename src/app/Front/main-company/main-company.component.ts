import { ManageAccountService } from './../../service/manage-account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from './../../../model/Company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-company',
  templateUrl: './main-company.component.html',
  styleUrls: ['./main-company.component.css']
})
export class MainCompanyComponent implements OnInit {

  id !: number;
  user!: Company;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: ManageAccountService
  ) { }

  ngOnInit() {
    this.user={
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
    this.user = new Company();

    this.id = this.route.snapshot.params['id'];

    this.userService.getCompanyById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.user = data;
      },
      (error) => console.log(error)
    );
  }

}
