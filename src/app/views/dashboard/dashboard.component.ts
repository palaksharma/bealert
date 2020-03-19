import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = ['s1ap', 'aupdatelocation', 'asms', 'aainterror', 'iucssccpconnection', 'aimsidetach', 
  'acompoundcall', 'iups', 'acompoundhandover'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public chartColors: Array<any> = [
    { // dark grey
      backgroundColor: 'rgba(32,168,216,0.5)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }
];

  public barChartData: ChartDataSets[] = [
    { data: [8, 7, 7, 11, 11, 10, 11 , 0 , 9], label: 'Delay (in mins)' },
  ];

  constructor() { }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }


  ngOnInit(): void {
  }
}
