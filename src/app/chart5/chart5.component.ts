import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core'
import { Chart } from 'angular-highcharts'
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-chart5',
  templateUrl: './chart5.component.html',
  styleUrls: ['./chart5.component.sass']
})
export class Chart5Component implements OnInit, OnChanges {
  @Input()
  private data: (string | number)[][] = null
  chart: Chart = null
  chartRef: Highcharts.Chart = null
  selectedItem: string = '0'
  items: string[] = ['Hamburger', 'Chicken Fillet', 'Fish Fillet']
  selectedRegion: string = '0'
  regions: string[] = ['Northeast', 'Southwest', 'Northwest', 'Southeast', 'Central']
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] != null && changes['data']['currentValue']) {
      this.chart = new Chart({
        chart: {
          type: 'line'
        },
        title: {
          text: `${this.regions[parseInt(this.selectedRegion)]} Totals For ${this.items[parseInt(this.selectedItem)]}`
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: this.data.map((x: (string | number)[]): string => `${x[0]} (${x[1]})`),
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
          text: 'Sales per region per item. We can see a trend for the Northeast to consume Fish Fillets especially on Thursdays.'
        },
        series: [{
          name: this.regions[parseInt(this.selectedRegion)],
          data: this.data.map((x: (string | number)[]): number => x[2 + parseInt(this.selectedRegion) * 3 + parseInt(this.selectedItem)] as number)
        } as any]
      })
      this.chart.ref$.subscribe(x => this.chartRef = x)
    }
  }
  onChangeRegion(e: { value: string }) {
    this.chartRef.update({
      title: {
        text: `${this.regions[parseInt(e.value)]} Totals For ${this.items[parseInt(this.selectedItem)]}`
      },
      series: [{
        name: this.regions[parseInt(this.selectedRegion)],
        data: this.data.map((x: (string | number)[]): number => x[2 + parseInt(e.value) * 3 + parseInt(this.selectedItem)] as number)
      } as any]
    })
  }
  onChangeItem(e: { value: string }) {
    this.chartRef.update({
      title: {
        text: `${this.regions[parseInt(this.selectedRegion)]} Totals For ${this.items[parseInt(e.value)]}`
      },
      series: [{
        name: this.regions[parseInt(this.selectedRegion)],
        data: this.data.map((x: (string | number)[]): number => x[2 + parseInt(this.selectedRegion) * 3 + parseInt(e.value)] as number)
      } as any]
    })
  }
}
