
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HeyTraveller';

  constructor( public router:Router){}



}
//wherever call here
/* this.spinner.show(undefined, {
  type: 'ball-fussion',
  color: 'white',
  bdColor: 'rgba(100,149,237, .8)',
})
this.spinner.hide(); */
