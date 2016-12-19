import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Year} from "../year";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-year-template',
  templateUrl: './year-template.component.html',
  styleUrls: ['./year-template.component.css']
})
export class YearTemplateComponent implements OnInit {
  @Input() yearObj: Year;

  @Output() save = new EventEmitter<Year>();

  private hideErr: boolean = true;

  datePickerOption = {
    singleDatePicker: true,
    "drops": "up"
  };

  yearDatePickerOption = {
    singleDatePicker: true,
    "drops": "down",
    locale: {
      "format": "YYYY"
    }
  };

  checkbox1 = false;
  checkbox2 = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (this.yearObj.cell41) {
      this.checkbox1 = true;
    }
    if (this.yearObj.cell42) {
      this.checkbox2 = true;
    }
  }

  saveYear(yearForm: NgForm) {
    if (yearForm.form.invalid) {
      this.hideErr = false;
      return;
    }
    this.save.next(this.yearObj);
  }

  back() {
    this.router.navigate(['report/year/list'])
  }
}
