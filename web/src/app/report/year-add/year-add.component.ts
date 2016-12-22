import {Component, OnInit, PlatformRef} from '@angular/core';
import {Year} from "../year";
import {YearService} from "../year.service";
import {Router} from "@angular/router";
import {NgForm, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-year-add',
  templateUrl: './year-add.component.html',
  styleUrls: ['./year-add.component.css']
})
export class YearAddComponent implements OnInit {
  yearObj: Year = new Year();

  constructor(private yearService: YearService, private router: Router) {
  }

  ngOnInit() {
  }

  save() {
    this.yearService.addYear(this.yearObj).then((result) => {
      this.router.navigate(['report/year/list']);
    });
  }

}
