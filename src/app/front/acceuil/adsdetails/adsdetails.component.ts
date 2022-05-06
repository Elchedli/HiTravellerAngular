import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcceuilService } from 'src/app/services/acceuil.service';

@Component({
  selector: 'app-adsdetails',
  templateUrl: './adsdetails.component.html',
  styleUrls: ['./adsdetails.component.css']
})
export class AdsdetailsComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  constructor(private service: AcceuilService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
