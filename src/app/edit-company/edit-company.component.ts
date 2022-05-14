import { ActivatedRoute } from '@angular/router';
import { Company } from './../../model/Company';
import { ManageAccountService } from './../service/manage-account.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  company:any;
  listCompany:any;
  idCompany:number;
  constructor(private router:ActivatedRoute,private manager : ManageAccountService) { }

  ngOnInit(): void {

  var idd=this.router.snapshot.paramMap.get("id")

  this.manager.getCompanyById(idd).subscribe(
    (data) => {
      console.log(data);
      this.company = data;
    }
  )
  }
  save(){
    var idd=this.router.snapshot.paramMap.get("id");
    this.manager.editCompany(idd).subscribe(
      (data)=> {
        console.log(data);
        this.company = data;
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
