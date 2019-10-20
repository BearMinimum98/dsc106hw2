import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Chart } from 'angular-highcharts'

@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.sass']
})
export class Chart4Component implements OnInit, OnChanges {
  @Input()
  private data: any[][] = null
  chart: Chart = null
  constructor() {}

  ngOnInit() {
  }

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
          categories: this.data.map(x => x[0]),
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
          data: this.data.map(x => x[2] + x[3] + x[4])
        } as any, {
          name: 'Southwest',
          data: this.data.map(x => x[5] + x[6] + x[7])
        } as any, {
          name: 'Northwest',
          data: this.data.map(x => x[8] + x[9] + x[10])
        } as any, {
          name: 'Southeast',
          data: this.data.map(x => x[11] + x[12] + x[13])
        } as any, {
          name: 'Central',
          data: this.data.map(x => x[14] + x[15] + x[16])
        } as any,]
      })
    }
  }

}
