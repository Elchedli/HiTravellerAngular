import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recomdetails',
  templateUrl: './recomdetails.component.html',
  styleUrls: ['./recomdetails.component.css'],
})
export class RecomdetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.snapshot.paramMap.subscribe((data) => {
    //   console.log(data);
    // });

    let data = this.route.snapshot.paramMap.get('id');
    console.log('data is :' + data);
  }
}
