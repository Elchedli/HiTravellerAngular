import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AcceuilService } from 'src/app/services/acceuil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifyrecomback',
  templateUrl: './modifyrecomback.component.html',
  styleUrls: ['./modifyrecomback.component.css'],
})
export class ModifyrecombackComponent implements OnInit {
  Recom: any;
  id = this.route.snapshot.paramMap.get('id');
  constructor(private service: AcceuilService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.searchrecom(this.id);
  }
  public searchrecom(id) {
    let resp = this.service.recomGet(id);
    resp.subscribe((datas) => {
      this.Recom = datas;
      console.log(datas);
    });
  }

  saverecommandation(f: NgForm) {
    console.log(f.value);
    f.value['recomAvis'] = 'bas';
    this.addRecom(f.value);
  }

  public addRecom(value: any) {
    let resp = this.service.recomajouter(value);
    resp.subscribe(
      (datas) => {
        console.log(datas);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'The request has not been passed',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
