import {Component, Input, Output, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {Season} from "../../../entity/season";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {TemplateCommonCtrl} from "../template-common-ctrl";
import {SeasonIndustryTemplate1Component} from "./season-industry-template1/season-industry-template1.component";
import {SeasonIndustryTemplate2Component} from "./season-industry-template2/season-industry-template2.component";
import {SeasonIndustryTemplate3Component} from "./season-industry-template3/season-industry-template3.component";

@Component({
  selector: 'app-season-template',
  templateUrl: './season-template.component.html',
  styleUrls: ['./season-template.component.css']
})
export class SeasonTemplateComponent extends TemplateCommonCtrl implements OnInit {
  @Input() seasonObj: Season;
  @Input() readonlyAll: boolean;
  @Input() modifyMode: boolean;
  @Output() save = new EventEmitter<Season>();

  datePickerOption = {
    singleDatePicker: true,
    "drops": "up"
  };

  checkbox1 = false;
  private showError: boolean = false;

  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
    if (this.seasonObj.cell151) {
      this.checkbox1 = true;
    }
  }

  @ViewChild(SeasonIndustryTemplate1Component) data1: SeasonIndustryTemplate1Component;
  @ViewChild(SeasonIndustryTemplate2Component) data2: SeasonIndustryTemplate2Component;
  @ViewChild(SeasonIndustryTemplate3Component) data3: SeasonIndustryTemplate3Component;

  saveSeason(formCtrl: NgForm) {
    const dataTemplate = this.data1 || this.data2 || this.data3;
    const templateFormCtrl: NgForm = dataTemplate.form;
    if (formCtrl.form.invalid || templateFormCtrl.form.invalid) {
      this.showError = true;
      return;
    }
    this.save.next(this.seasonObj);
  }

  back() {
    this.router.navigate(['report/season/list']);
  }
}
