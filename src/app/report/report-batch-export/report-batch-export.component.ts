import {Component, OnInit} from '@angular/core';
import {City} from "../../../entity/city";
import {UserService} from "../../share/user.service";


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

}
