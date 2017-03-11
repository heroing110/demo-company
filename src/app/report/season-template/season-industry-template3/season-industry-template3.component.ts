import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {TemplateCommonCtrl} from "../../template-common-ctrl";
import {Season} from "../../../../entity/season";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-season-industry-template3',
  templateUrl: 'season-industry-template3.component.html'
})
export class SeasonIndustryTemplate3Component extends TemplateCommonCtrl implements OnInit {
  @Input() seasonObj: Season;
  @ViewChild(NgForm) form: NgForm;

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
