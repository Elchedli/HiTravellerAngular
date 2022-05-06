import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcceuilService } from 'src/app/services/acceuil.service';

@Component({
  selector: 'app-recomdetails',
  templateUrl: './recomdetails.component.html',
  styleUrls: ['./recomdetails.component.css'],
})
export class RecomdetailsComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  constructor(private service: AcceuilService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.snapshot.paramMap.subscribe((data) => {
    //   console.log(data);
    // });
  }
}
