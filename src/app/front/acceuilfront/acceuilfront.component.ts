import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
// import {NgxPaginationModule} from 'ngx-pagination';
declare var $: any;
// declare function mygay(): any;
@Component({
  selector: 'app-acceuilfront',
  templateUrl: './acceuilfront.component.html',
  styleUrls: ['./acceuilfront.component.css'],
})
// ,AfterViewInit, AfterViewChecked
export class AcceuilfrontComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    // this.addScript('assets/js/chedli.js');
    // $.getScript('assets/js/chedli.js');
  }
  addScript(data: string) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = data;
    this.elementRef.nativeElement.appendChild(s);
  }
  public loadJsFile(url) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  ngOnInit(): void {
    // $.getScript('assets/js/chedli.js');
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
    // this.addScript('assets/js/jesus.js');
  }
}
