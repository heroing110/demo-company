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

  companyName: string = '';

  constructor(private yearService: YearService) {
  }

  ngOnInit() {
    this.query('');
  }

  query(companyName: string) {
    this.yearService.getYearList(companyName).then((years) => {
      this.yearList = years;
      this.yearList.sort((a, b) => +a.cityId - +b.cityId);
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
