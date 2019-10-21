import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { Chart } from 'angular-highcharts'
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.sass']
})
export class Chart2Component implements OnChanges {
  @Input()
  private data: (string | number)[][] = null
  chart: Chart = null
  chartRef: Highcharts.Chart = null
  selected: string = '0'
  items: string[] = ['Hamburger', 'Chicken Fillet', 'Fish Fillet']
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] != null && changes['data']['currentValue']) {
      this.chart = new Chart({
        chart: {
          type: 'line'
        },
        title: {
          text: `Region Totals for ${this.items[this.selected]}`
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
          text: 'The same story goes if we break down by item, with all items taking a similar hit in terms of sales drops. More worryingly, sales seem to have stagnated since October, 2018 instead of growing at a steady pace like before.'
        },
        series: [{
          name: 'Northeast',
          data: this.data.map((x: (string | number)[]): number => x[1] as number)
        } as any, {
          name: 'Southwest',
          data: this.data.map((x: (string | number)[]): number => x[4] as number)
        } as any, {
          name: 'Northwest',
          data: this.data.map((x: (string | number)[]): number => x[7] as number)
        } as any, {
          name: 'Southeast',
          data: this.data.map((x: (string | number)[]): number => x[10] as number)
        } as any, {
          name: 'Central',
          data: this.data.map((x: (string | number)[]): number => x[13] as number)
        } as any,]
      })
      this.chart.ref$.subscribe(x => this.chartRef = x)
    }
  }
  onChange(e: { value: string }) {
    this.chartRef.update({
      title: {
        text: `Region Totals For ${this.items[this.selected]}`
      },
      series: [{
        name: 'Northeast',
        data: this.data.map((x: (string | number)[]): number => x[1 + parseInt(e.value)] as number)
      } as any, {
        name: 'Southwest',
        data: this.data.map((x: (string | number)[]): number => x[4 + parseInt(e.value)] as number)
      } as any, {
        name: 'Northwest',
        data: this.data.map((x: (string | number)[]): number => x[7 + parseInt(e.value)] as number)
      } as any, {
        name: 'Southeast',
        data: this.data.map((x: (string | number)[]): number => x[10 + parseInt(e.value)] as number)
      } as any, {
        name: 'Central',
        data: this.data.map((x: (string | number)[]): number => x[13 + parseInt(e.value)] as number)
      } as any,]
    })
  }
}
