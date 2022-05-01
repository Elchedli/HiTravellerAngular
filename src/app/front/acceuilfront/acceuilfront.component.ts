import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
declare var $: any;
// declare function mygay(): any;
@Component({
  selector: 'app-acceuilfront',
  templateUrl: './acceuilfront.component.html',
  styleUrls: ['./acceuilfront.component.css'],
})
export class AcceuilfrontComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    // this.addScript('assets/js/main.js');
  }
  addScript(data: string) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = data;
    this.elementRef.nativeElement.appendChild(s);
  }
  ngOnInit(): void {
    // $.getScript('assets/js/main.js');
    // $('.carousel').carousel({
    //   interval: 2000,
    // });
    // this.addScript('assets/js/jquery-3.6.0.min.js');
    // this.addScript('assets/js/bootstrap.bundle.min.js');
    // this.addScript('assets/js/jquery.easing.min.js');
    // this.addScript('assets/js/jquery.appear.js');
    // this.addScript('assets/js/modernizr.min.js');
    // this.addScript('assets/js/owl.carousel.min.js');
    // this.addScript('assets/js/jquery.nice-select.min.js');
    // this.addScript('assets/js/jquery-ui.min.js');
    // this.addScript('assets/js/jquery.magnific-popup.min.js');
    // this.addScript('assets/js/isotope.pkgd.min.js');
    // this.addScript('assets/js/imagesloaded.pkgd.min.js');
    // this.addScript('assets/js/wow.min.js');
    // this.addScript('assets/js/count-to.js');
    // this.addScript('assets/js/main.js');
    // this.addScript('assets/js/countdown.min.js');
    // this.addScript('assets/js/jquery-3.6.0.min.js');
    // this.addScript('assets/js/jesus.js');
    // mygay();
  }
}
