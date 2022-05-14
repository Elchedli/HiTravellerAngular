
import Swal from 'sweetalert2';

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
  hideAccountCompany(id:number){
    let resp = this.service.hideCompany(id);
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
  }
  hideAccount(id:number){
    let resp = this.service.hideProfile(id);
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
    /* this.service.hideProfile(id);
    alert(this.id) */
    }

  deleteForEver(id:number){
    this.service.deleteProfile(id);
    alert(this.id)
  }
}
