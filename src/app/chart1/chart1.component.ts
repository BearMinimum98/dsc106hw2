import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.sass']
})
export class Chart1Component implements OnInit, OnChanges {
  @Input()
  private data: any[][]
  chart: Chart = null
  constructor() { }
  ngOnInit() { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] != null && changes['data']['currentValue']) {
      this.chart = new Chart({
        chart: {
          type: 'line'
        },
        title: {
          text: 'Region Totals'
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: this.data.map(x => x[0]),
          title: {
            text: 'Month'
          },
          plotLines: [{
            color: 'red', // Color value
            dashStyle: 'solid', // Style of the plot line. Default to solid
            value: 33, // Value of where the line will appear
            width: 2 // Width of the line
          }]
        } as any,
        yAxis: {
          title: {
            text: "USD ($) Sold"
          }
        },
        caption: {
          text: "As we can see, there is a sharp decline in overall sales across all regions when BK introduced their Impossible Burger during October, 2018"
        },
        series: [{
          name: 'Northeast',
          data: this.data.map(x => x[1] + x[2] + x[3])
        } as any, {
          name: 'Southwest',
          data: this.data.map(x => x[4] + x[5] + x[6])
        } as any, {
          name: 'Northwest',
          data: this.data.map(x => x[7] + x[8] + x[9])
        } as any, {
          name: 'Southeast',
          data: this.data.map(x => x[10] + x[11] + x[12])
        } as any, {
          name: 'Central',
          data: this.data.map(x => x[13] + x[14] + x[15])
        } as any,]
      })
    }
  }
}
