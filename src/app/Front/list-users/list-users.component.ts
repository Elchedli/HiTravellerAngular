import { Profile } from './../../../model/Profile';
import { Router, RouterLinkActive } from '@angular/router';
import { ManageAccountService } from './../../service/manage-account.service';
import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  //Pagination
  items = [];
    pageOfItems: Array<any>;
  yes:boolean = true;
  yess:boolean = true;
  no:boolean = false;
  GeoHidden:boolean = true;
  listUsers  : Profile[];
// recherche
  data:any;
  searchInfo:string
// recherche location
  location : string;
  Geo:any;
  // filter

genderFilter  = {Male : true, Female :true};

listFilter: any
genderFiltered : any[] =[];

// total
total : any;
  constructor(private service:ManageAccountService, public router: Router) { }

  ngOnInit(): void {
    this.items = Array(10).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
    let resp = this.service.getAllActiveUsers();
    resp.subscribe((datas)=>{
      this.listUsers = datas
      console.log(datas);
    });
  }

  ngOnChanges() {
    ///** WILL TRIGGER WHEN PARENT COMPONENT UPDATES '**
    this.filterChange();

    }
  filterChange() {
    this.yess =false;
    this.no = true;
    this.genderFiltered = this.listFilter.genderFilter(x =>
      (x.sex === 'Male' && this.genderFilter.Male)
      || (x.sex ==='Female' && this.genderFilter.Female) );
    this.ngOnChanges();
  }
  searchByLocation(location:string){

    this.no = true;
    this.yes = true;
    this.GeoHidden = false;
    this.service.searchFromLocationProfile(location).subscribe(
      response => {
        this.data=response;
        this.total = count(this.data)

      },
      error =>{
        console.log("error while getting user details")
      }
    );
  }
  search(searchInfo:string){
    this.yes = false;
    this.GeoHidden = true;
    this.no = true;
    this.service.searchProfileActive(searchInfo).subscribe(
      response => {
        this.data=response;
        this.total = count(this.data)

      },
      error =>{
        console.log("error while getting user details")
      }
    );

  }
  public getInfo(id:number){
    let resp = this.service.getProfileById(id);
  }
  public follow(id:number){

  }
  navigateTo(id:number){
    this.router.navigate(['/profile/'+id])
  }
  navTo(path:string){

  }

}
