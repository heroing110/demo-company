import {Component, OnInit} from '@angular/core';
import {Year} from "../../../entity/year";
import {YearService} from "../year.service";
import {City} from "../../../entity/city";
import {UserService} from "../../share/user.service";

const firstBy = require('thenby');

@Component({
  selector: 'app-year-list',
  templateUrl: './year-list.component.html',
  styleUrls: ['./year-list.component.css']
})
export class YearListComponent implements OnInit {

  yearList: Year[];

  companyName: string = '';
  cityid: string;
  citys: City[];

  constructor(private yearService: YearService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllCity().then(citys => this.citys = citys);
    this.query();
  }

  query(companyName?, cityid?) {
    this.yearService.getYearList(companyName, cityid).then((years) => {
      this.yearList = years;
      this.yearList.sort(firstBy('cityId').thenBy('year'));
    });
  }

  removeYear(yearId: string) {
    if (confirm('确定删除此报表？')) {
      this.yearService.removeYear(yearId).then((result) => {
        if (result.removed) {
          alert('删除成功');
          this.query(this.companyName);
        } else {
          alert(result.message);
        }
      });
    }
  }

}
