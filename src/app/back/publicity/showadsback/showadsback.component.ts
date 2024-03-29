import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { AcceuilService } from 'src/app/services/acceuil.service';
import Swal from 'sweetalert2';
import { Chart } from 'node_modules/chart.js';
import { DOCUMENT } from '@angular/common';
import { Waves } from '../../../../assets/js/waves.js';
// var Waves = require('node-waves');
declare var $: any;
@Component({
  selector: 'app-showaddback',
  templateUrl: './showadsback.component.html',
  styleUrls: ['./showadsback.component.css'],
})
export class ShowadsbackComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  message: any;
  type: string = 'Remise';
  region: string = 'Global';
  place?: string;
  stats: any;
  listpub: any;
  window: any = window;
  constructor(
    private service: AcceuilService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.window = this.document.defaultView;
  }
  ngAfterViewChecked(): void {}
  ngAfterViewInit(): void {
    // scriptReady();
  }
  ngOnInit(): void {
    this.listAd();
    this.getStats();

    scriptInit();

    // scriptInit()
    // alert(this.window.);
    // this.window['Waves'].init();
  }

  createRange(number) {
    return new Array(number);
  }
  public changeChart(datas) {
    console.log('chart is : ' + datas);
    const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);
    const randomRGB = () =>
      `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    var backgroundColors: string[] = [];
    var borderColors: string[] = [];
    var Labels: string[] = [];
    var content: string[] = [];
    datas.forEach((element) => {
      console.log('hello world');
      backgroundColors.push(randomRGB());
      borderColors.push(randomRGB());
      Labels.push(element[1]);
      content.push(element[2]);
    });
    console.log('background colors : ' + backgroundColors);
    console.log('border colors : ' + borderColors);
    var myChart = new Chart('myChart', {
      type: 'pie',
      data: {
        labels: Labels,
        datasets: [
          {
            label: 'Stats of Ads',
            data: content,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  public effacerAd(id: number) {
    let resp = this.service.DeleteAd(id);
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
        this.listAd();
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

  public getStats() {
    let resp = this.service.getstats();
    resp.subscribe((data) => {
      this.stats = data;
      this.changeChart(data);
    });
  }

  public listAd() {
    let resp =
      this.region == 'Nationnal'
        ? this.service.afficherregion({
            pubregion: this.region.toUpperCase(),
            pubtype: this.type.toUpperCase(),
            country: this.place,
          })
        : this.service.afficherregion({
            pubregion: this.region.toUpperCase(),
            pubtype: this.type.toUpperCase(),
          });
    resp.subscribe((datas) => {
      this.listpub = datas;
      console.log(datas);

      setTimeout(() => {
        scriptReady();
      }, 300);
    });
  }
}

function scriptInit() {
  $('#side-menu').metisMenu(),
    $('#vertical-menu-btn').on('click', function () {
      $('body').toggleClass('enable-vertical-menu');
    }),
    $('.menu-overlay').on('click', function () {
      $('body').removeClass('enable-vertical-menu');
    }),
    $('#sidebar-menu a').each((i, element) => {
      var a = window.location.href.split(/[?#]/)[0];
      element.href == a &&
        ($(element).addClass('active'),
        $(element).parent().addClass('mm-active'),
        $(element).parent().parent().addClass('mm-show'),
        $(element).parent().parent().prev().addClass('mm-active'),
        $(element).parent().parent().parent().addClass('mm-active'),
        $(element).parent().parent().parent().parent().addClass('mm-show'),
        $(element)
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass('mm-active'));
    }),
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    }),
    $(function () {
      $('[data-toggle="popover"]').popover();
    });
}

function scriptReady() {
  $('#basic-datatable').DataTable({
    language: {
      paginate: {
        previous: "<i class='mdi mdi-chevron-left'>",
        next: "<i class='mdi mdi-chevron-right'>",
      },
    },
    drawCallback: function () {
      $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
    },
  });
  var a = $('#datatable-buttons').DataTable({
    lengthChange: !1,
    buttons: ['copy', 'print', 'pdf'],
    language: {
      paginate: {
        previous: "<i class='mdi mdi-chevron-left'>",
        next: "<i class='mdi mdi-chevron-right'>",
      },
    },
    drawCallback: function () {
      $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
    },
  });
  $('#selection-datatable').DataTable({
    select: { style: 'multi' },
    language: {
      paginate: {
        previous: "<i class='mdi mdi-chevron-left'>",
        next: "<i class='mdi mdi-chevron-right'>",
      },
    },
    drawCallback: function () {
      $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
    },
  }),
    $('#key-datatable').DataTable({
      keys: !0,
      language: {
        paginate: {
          previous: "<i class='mdi mdi-chevron-left'>",
          next: "<i class='mdi mdi-chevron-right'>",
        },
      },
      drawCallback: function () {
        $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
      },
    }),
    a
      .buttons()
      .container()
      .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)'),
    $('#complex-header-datatable').DataTable({
      language: {
        paginate: {
          previous: "<i class='mdi mdi-chevron-left'>",
          next: "<i class='mdi mdi-chevron-right'>",
        },
      },
      drawCallback: function () {
        $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
      },
      columnDefs: [{ visible: !1, targets: -1 }],
    }),
    $('#state-saving-datatable').DataTable({
      stateSave: !0,
      language: {
        paginate: {
          previous: "<i class='mdi mdi-chevron-left'>",
          next: "<i class='mdi mdi-chevron-right'>",
        },
      },
      drawCallback: function () {
        $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
      },
    });
}
