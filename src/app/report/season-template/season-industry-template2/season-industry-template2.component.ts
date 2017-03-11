import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Year} from "../../../../entity/year";
import {TemplateCommonCtrl} from "../../template-common-ctrl";
import {Season} from "../../../../entity/season";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-season-industry-template2',
  templateUrl: 'season-industry-template2.component.html'
})
export class SeasonIndustryTemplate2Component extends TemplateCommonCtrl implements OnInit {
  @Input() seasonObj: Season;
  @ViewChild(NgForm) form: NgForm;

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
