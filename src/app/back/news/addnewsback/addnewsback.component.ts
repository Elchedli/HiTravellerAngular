import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AcceuilService } from 'src/app/services/acceuil.service';

@Component({
  selector: 'app-addnewsback',
  templateUrl: './addnewsback.component.html',
  styleUrls: ['./addnewsback.component.css']
})
export class AddnewsbackComponent implements OnInit {
  region: string = 'International';
  message:any;
  constructor(private service:AcceuilService) { }

  ngOnInit(): void {
  }
  savearticle(f: NgForm){
    console.log(f.value);
    this.ajouterNews(f.value);
  }
  
  public ajouterNews(value:any){
    let resp = this.service.newsajouter(value);
    resp.subscribe((data)=>this.message = data);
  }
}
