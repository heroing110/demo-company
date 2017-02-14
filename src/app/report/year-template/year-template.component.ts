import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Year} from "../../../entity/year";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {TemplateCommonCtrl} from "../template-common-ctrl";

@Component({
  selector: 'app-year-template',
  templateUrl: './year-template.component.html',
  styleUrls: ['./year-template.component.css']
})
export class YearTemplateComponent extends TemplateCommonCtrl implements OnInit {
  @Input() yearObj: Year;

  @Output() save = new EventEmitter<Year>();

  private showError: boolean = false;

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
  checkbox3 = false;

  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
    if (this.yearObj.cell41) {
      this.checkbox1 = true;
    }
    if (this.yearObj.cell42) {
      this.checkbox2 = true;
    }

    if (this.yearObj.crossCountry.length > 0) {
      this.checkbox3 = true;
    }
  }

  saveYear(yearForm: NgForm) {
    if (yearForm.form.invalid) {
      this.showError = true;
      return;
    }
    this.save.next(this.yearObj);
  }

  back() {
    this.router.navigate(['report/year/list'])
  }
}
