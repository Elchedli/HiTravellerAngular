import { ActivatedRoute } from '@angular/router';
import { Profile } from './../../model/Profile';
import { ManageAccountService } from './../service/manage-account.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  profile:any;
  listProfile:any;
  idProfile:number;
  constructor(private router:ActivatedRoute,private manager:ManageAccountService) { }

  ngOnInit(): void {

    var idd=this.router.snapshot.paramMap.get("id");

    this.profile = new Profile();
    this.manager.getProfileById(idd).subscribe(
      (data)=> {
        console.log(data);
        this.profile = data;
      }
    )

  }

  save(){

    var idd=this.router.snapshot.paramMap.get("id");

    this.manager.editProfile(idd).subscribe(
      (data)=> {
        console.log(data);
        this.profile = data;
        Swal.fire({
          title: 'Do you want to save the changes?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      }, (error) => Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    )
  }
}
