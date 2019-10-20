import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.sass']
})
export class Chart3Component implements OnInit, OnChanges {
  @Input()
  private data: any[][]
  chart1: Chart = null
  chart2: Chart = null
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] != null && changes['data']['currentValue']) {
      this.chart1 = new Chart({
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Region Shares Before Impossible Burger'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>${point.y}</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        credits: {
          enabled: false
        },
        caption: {
          text: "Shares of each region's sales compared to total sales, September 2018"
        },
        series: [{
          name: 'Total sales',
          colorByPoint: true,
          data: [{
              name: 'Northeast',
              y: this.data[32][1] + this.data[32][2] + this.data[32][3]
            } as any, {
              name: 'Southwest',
              y: this.data[32][4] + this.data[32][5] + this.data[32][6]
            } as any, {
              name: 'Northwest',
              y: this.data[32][7] + this.data[32][8] + this.data[32][9]
            } as any, {
              name: 'Southeast',
              y: this.data[32][10] + this.data[32][11] + this.data[32][12]
            } as any, {
              name: 'Central',
              y: this.data[32][13] + this.data[32][14] + this.data[32][15]
            } as any]
        } as any]
      })

      this.chart2 = new Chart({
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Region Shares After Impossible Burger'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>${point.y}</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        credits: {
          enabled: false
        },
        caption: {
          text: "Shares of each region's sales compared to total sales, October 2018"
        },
        series: [{
          name: 'Total sales',
          colorByPoint: true,
          data: [{
              name: 'Northeast',
              y: this.data[33][1] + this.data[33][2] + this.data[33][3]
            } as any, {
              name: 'Southwest',
              y: this.data[33][4] + this.data[33][5] + this.data[33][6]
            } as any, {
              name: 'Northwest',
              y: this.data[33][7] + this.data[33][8] + this.data[33][9]
            } as any, {
              name: 'Southeast',
              y: this.data[33][10] + this.data[33][11] + this.data[33][12]
            } as any, {
              name: 'Central',
              y: this.data[33][13] + this.data[33][14] + this.data[33][15]
            } as any]
        } as any]
      })
    }
  }
}
