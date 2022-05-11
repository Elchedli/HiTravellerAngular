
import { ManageAccountService } from './../service/manage-account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.css']
})
export class DeleteProfileComponent implements OnInit {

  id:number

  constructor(private service:ManageAccountService) { }

  ngOnInit(): void {
  }

  close(){

  }
  hideAccount(id:number){
    this.service.hideProfile(id);
    }

  deleteForEver(id:number){
    this.service.deleteProfile(id);
  }
}
