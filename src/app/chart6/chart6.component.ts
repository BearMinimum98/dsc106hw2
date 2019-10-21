import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Chart } from 'angular-highcharts'

@Component({
  selector: 'app-chart6',
  templateUrl: './chart6.component.html',
  styleUrls: ['./chart6.component.sass']
})
export class Chart6Component implements OnChanges {
  @Input()
  private data: (string | number)[][]
  chart: Chart = null
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] != null && changes['data']['currentValue']) {
      let categories: string[] = this.data.map((x): string => x[0] as string).slice(1)
      let totaledSales: number[] = this.data.map((x): number => {
        return x.reduce((acc: number, cur: (string | number)): number => {
          if (typeof cur === 'number') {
            acc += (cur as number)
          }
          return acc;
        }, 0) as number
      })
      let diffs: number[] = [];
      for (let i = 1; i < totaledSales.length; i++) {
        diffs[i - 1] = (totaledSales[i] - totaledSales[i - 1]) / totaledSales[i - 1] * 100
      }
      this.chart = new Chart({
        chart: {
          type: 'line'
        },
        title: {
          text: '% Growth Since Last Month'
        },
        credits: {
          enabled: false
        },
        tooltip: {
          pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.2f}%</b><br/>'
        },
        xAxis: {
          categories: categories,
          title: {
            text: 'Month'
          },
          plotLines: [{
            color: 'red', // Color value
            dashStyle: 'solid', // Style of the plot line. Default to solid
            value: 32, // Value of where the line will appear
            width: 2 // Width of the line
          }]
        } as any,
        yAxis: {
          title: {
            text: "Growth (%)"
          }
        },
        caption: {
          text: "In terms of overall growth, we had longer periods of growth than shrink before the Impossible Burger was released. However, we can see the Impossible Burger did cut our growth by a large margin, and has also led slower growth since."
        },
        series: [{
          name: 'Change since last month',
          data: diffs,
          negativeColor: '#FF0000'
        } as any]
      })
    }
  }
}
