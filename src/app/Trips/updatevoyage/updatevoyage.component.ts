import { Component, OnInit } from '@angular/core';
import { Voyage } from '../../model/voyage';
import { VoyageService } from '../../services/voyage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatevoyage',
  templateUrl: './updatevoyage.component.html',
  styleUrls: ['./updatevoyage.component.css']
})
export class UpdatevoyageComponent implements OnInit {

  id!: number;
  voyage!: any;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private service: VoyageService) { }

    ngOnInit() {
      this.voyage = new Voyage();
      this.submitted = false;
      this.id = this.route.snapshot.params['id'];
      
      this.service.getOneVoyage(this.id)
        .subscribe(data => {
          console.log(data)
          this.voyage = data;
        }, error => console.log(error));
    }
  

  updateEmployee() {
    this.service.updateVoyage(this.id, this.voyage)
      .subscribe(data => {
        console.log(data);
        this.voyage = new Voyage();      
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateEmployee(); 
    alert("Trip updated successfully");  
    this.gotoList(); 
  }

  gotoList() {
    this.router.navigate(['/voyage']);
  }



}
