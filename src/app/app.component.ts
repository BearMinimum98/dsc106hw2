import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'HW2'
  monthly_data: (string | number)[][] = null
  daily_data: (string | number)[][] = null

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('assets/monthly_sales.csv', {responseType: 'text'}).subscribe((data: string) => {
      let tempData: string[] = data.split('\n')
      tempData = tempData.slice(1, tempData.length)
      this.monthly_data = tempData.map(x => x.split(',').map((x, i) => i === 0 ? x : parseInt(x)))
    })

    this.http.get('assets/daily_sales.csv', {responseType: 'text'}).subscribe((data: string) => {
      let tempData: string[] = data.split('\n')
      tempData = tempData.slice(1, tempData.length)
      this.daily_data = tempData.reduce((acc: (string | number)[][], cur: string) => {
        if (cur.length) {
          acc.push(cur.split(',').map((x, i) => i < 2 ? x : parseInt(x)))
        }
        return acc
      }, [] as (string | number)[][])
    })
  }
}
