import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-listofemplo',
  templateUrl: './listofemplo.component.html',
  styleUrls: ['./listofemplo.component.css']
})
export class ListofemploComponent implements OnInit {

  listUser!:User[];
  id!:number;

  constructor(private service : VoyageService,private route: ActivatedRoute,private router: Router
    ,private sanitizer: DomSanitizer,private h:HttpClient) {}


  ngOnInit() {  
    this.id = this.route.snapshot.params['id'];
    this.reloadData();
  }

  reloadData() {
    this.service.GetEmployee(this.id).subscribe(data => {
      this.listUser = data;
    });
 
  }

}
