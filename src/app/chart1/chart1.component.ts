import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core'
import { Chart } from 'angular-highcharts'

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.sass']
})
export class Chart1Component implements OnInit, OnChanges {
  @Input()
  private data: (string | number)[][]
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
          categories: this.data.map((x): string => x[0] as string),
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
          data: this.data.map((x: (string | number)[]): number => (x[1] as number) + (x[2] as number) + (x[3] as number))
        } as any, {
          name: 'Southwest',
          data: this.data.map((x: (string | number)[]): number => (x[4] as number) + (x[5] as number) + (x[6] as number))
        } as any, {
          name: 'Northwest',
          data: this.data.map((x: (string | number)[]): number => (x[7] as number) + (x[8] as number) + (x[9] as number))
        } as any, {
          name: 'Southeast',
          data: this.data.map((x: (string | number)[]): number => (x[10] as number) + (x[11] as number) + (x[12] as number))
        } as any, {
          name: 'Central',
          data: this.data.map((x: (string | number)[]): number => (x[13] as number) + (x[14] as number) + (x[15] as number))
        } as any,]
      })
    }
  }
}
