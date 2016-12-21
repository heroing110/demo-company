import { Component, OnInit } from '@angular/core';
import {Year} from "../year";
import {YearService} from "../year.service";

@Component({
  selector: 'app-year-list',
  templateUrl: './year-list.component.html',
  styleUrls: ['./year-list.component.css']
})
export class YearListComponent implements OnInit {

  yearList: Year[];

  params = {};

  constructor(private yearService: YearService) {
  }

  ngOnInit() {
    this.yearService.getYearList().then((years: Year[]) => {
      this.yearList = years;
    });
  }

  query(){
    console.log('params',this.params);
    this.yearService.getYearByParam(this.params).then((years:Year[])=>{
      console.log('years',years);
      this.yearList = years;
    });
  }

}
