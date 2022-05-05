import { Component, OnInit } from '@angular/core';
import { AcceuilService } from 'src/app/services/acceuil.service';
import Swal from 'sweetalert2';
import { Chart } from 'node_modules/chart.js';
@Component({
  selector: 'app-showaddback',
  templateUrl: './showadsback.component.html',
  styleUrls: ['./showadsback.component.css'],
})
export class ShowadsbackComponent implements OnInit {
  // pub: Publicite= new Publicite();
  message: any;
  type: string = 'Remise';
  region: string = 'Global';
  place?: string;
  stats: any;
  listpub: any;
  // ctx = document.getElementById('myChart');

  // public pieChartLabels: Label[] = [['Download','Sales'],['In','Store','Sales'],'Mail Sales'];
  // public pieChartData: number[] = [300,500,100];
  // public pieChartType : ChartType = 'pie';
  // public pieChartLegend= true;
  // public pieChartPlugins : [pluginDataLabels];
  // public pieChartOptions
  // public pieChartColors

  // public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  // public pieChartData = [120, 150, 180, 90];
  // public pieChartType: ChartType = 'pie';
  // public barChartType: ChartType = 'bar';

  constructor(private service: AcceuilService) {}
  ngOnInit(): void {
    // google.charts.load('current', { packages: ['corechart'] });
    // google.charts.setOnLoadCallback(this.drawChart);
    this.listAd();
    this.getStats();
    // this.changeChart('blabl');
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
  // drawChart() {
  //   // Define the chart to be drawn.
  //   var data = new google.visualization.DataTable();
  //   data.addColumn('string', 'Element');
  //   data.addColumn('number', 'Percentage');
  //   data.addRows([
  //     ['Nitrogen', 0.78],
  //     ['Oxygen', 0.21],
  //     ['Other', 0.01],
  //   ]);

  //   // Instantiate and draw the chart.
  //   var chart = new google.visualization.PieChart(
  //     document.getElementById('divPieChart')
  //   );
  //   chart.draw(data, null);
  // }

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
      // console.log(data);
    });
    // console.log("data is : "+this.stats[0]);
  }

  public listAd() {
    // console.log("region : "+this.region.toUpperCase()+" type : "+this.type.toUpperCase()+" place : "+this.place);
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
    });
    // console.log(this.listpub);
  }

  // public barChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true,
  // };
  // public barChartLabels = [
  //   '2006',
  //   '2007',
  //   '2008',
  //   '2009',
  //   '2010',
  //   '2011',
  //   '2012',
  // ];
  // public barChartType = 'bar';
  // public barChartLegend = true;
  // public barChartData = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  // ];
}
