import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-detailstrips-front',
  templateUrl: './detailstrips-front.component.html',
  styleUrls: ['./detailstrips-front.component.css']
})
export class DetailstripsFrontComponent implements OnInit {

  id!: number;
  voyage!: any;
  test!:String;
  submitted = false;
  path="../../assets/images/trips/";
  constructor(private route: ActivatedRoute,private router: Router,
    private service: VoyageService) { 
}

  ngOnInit(): void {
 
    this.voyage = new Voyage();
    this.id = this.route.snapshot.params['id'];
      
    this.service.getOneVoyage(this.id)
      .subscribe(data => {
        console.log(data)
        this.voyage = data;
      }, error => console.log(error));

  }

  addEmployeeToVoyage() {
     this.service.addEmployeeToVoyage(this.id,3).subscribe(data => this.test=data);
      alert("This trip is added to Your Trips Successfully");
  }

}
