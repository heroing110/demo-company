import {Component, OnInit} from '@angular/core';
import {City} from "../../../entity/city";
import {UserService} from "../../share/user.service";
import {URLSearchParams} from "@angular/http";


@Component({
  templateUrl: './report-batch-export.component.html'
})
export class ReportBatchExportComponent implements OnInit {

  season: string = '';
  cityId: string = '';
  year: string = '';
  industry: string = '';

  citys: City[];

  monthOption = {
    singleMonth: true,
    singleDatePicker: true
  };
  yearOption = {
    singleDatePicker: true
  };

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllCity().then(citys => this.citys = citys);
  }

  getParams() {
    const search = new URLSearchParams();

    if (this.industry) {
      search.append('industry', this.industry);
    }
    if (this.year) {
      search.append('year', this.year);
    }
    if (this.season) {
      search.append('season', this.season);
    }
    if (this.cityId) {
      search.append('cityId', this.cityId);
    }

    return search;
  }
}
