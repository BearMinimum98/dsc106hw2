import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core'
import { Chart } from 'angular-highcharts'

@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.sass']
})
export class Chart4Component implements OnInit, OnChanges {
  @Input()
  private data: (string | number)[][] = null
  chart: Chart = null
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] != null && changes['data']['currentValue']) {
      this.chart = new Chart({
        chart: {
          type: 'line'
        },
        title: {
          text: 'Day of Week\'s Impact on Sales'
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: this.data.map((x: (string | number)[]): string => `${(x[0] as number)} (${(x[1] as number)})`),
          title: {
            text: 'Day of Week'
          }
        } as any,
        yAxis: {
          title: {
            text: "USD ($) Sold"
          }
        },
        caption: {
          text: "Sales seem to peak on Fridays, except in the Northeast, where the majority of sales occur on Thursday. This might have occured due to the Northeast being popular among business travelers, who are going back home late Thursday/early Friday."
        },
        series: [{
          name: 'Northeast',
          data: this.data.map((x: (string | number)[]): number => ((x[2] as number) as number) + ((x[3] as number) as number) + ((x[4] as number) as number))
        } as any, {
          name: 'Southwest',
          data: this.data.map((x: (string | number)[]): number => (x[5] as number) + (x[6] as number) + (x[7] as number))
        } as any, {
          name: 'Northwest',
          data: this.data.map((x: (string | number)[]): number => (x[8] as number) + (x[9] as number) + (x[10] as number))
        } as any, {
          name: 'Southeast',
          data: this.data.map((x: (string | number)[]): number => (x[11] as number) + (x[12] as number) + (x[13] as number))
        } as any, {
          name: 'Central',
          data: this.data.map((x: (string | number)[]): number => (x[14] as number) + (x[15] as number) + (x[16] as number))
        } as any,]
      })
    }
  }

}
