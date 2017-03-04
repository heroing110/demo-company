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
  @Input() readonlyAll: boolean;
  @Input() yearObj: Year;
  @Input() modifyMode: boolean;
  @Output() save = new EventEmitter<Year>();

  datePickerOption = {
    singleDatePicker: true,
    "drops": "up"
  };

  showError = false;

  checkbox1 = false;
  checkbox2 = false;
  checkbox3 = false;

  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
    if (this.yearObj.cell41a && this.yearObj.cell41b) {
      this.checkbox1 = true;
    }
    if (this.yearObj.cell42a && this.yearObj.cell42b) {
      this.checkbox2 = true;
    }

    if (this.yearObj.crossCountry && this.yearObj.crossCountry.length > 0) {
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
