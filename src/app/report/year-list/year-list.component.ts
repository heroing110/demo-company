import {Component, OnInit} from '@angular/core';
import {Year} from "../../../entity/year";
import {YearService} from "../year.service";

@Component({
  selector: 'app-year-list',
  templateUrl: './year-list.component.html',
  styleUrls: ['./year-list.component.css']
})
export class YearListComponent implements OnInit {

  yearList: Year[];

  companyName: string;

  constructor(private yearService: YearService) {
  }

  ngOnInit() {
    this.query(null);
  }

  query(companyName: string) {
    this.yearService.getYearList(companyName).then(years => this.yearList = years);
  }

}
