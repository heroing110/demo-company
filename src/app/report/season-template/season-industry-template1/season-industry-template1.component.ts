import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {TemplateCommonCtrl} from "../../template-common-ctrl";
import {Season} from "../../../../entity/season";
import {NgForm} from "@angular/forms";


//////// 电子商务应用企业

@Component({
  selector: 'app-season-industry-template1',
  templateUrl: 'season-industry-template1.component.html'
})
export class SeasonIndustryTemplate1Component extends TemplateCommonCtrl implements OnInit {
  @Input() seasonObj: Season;
  @ViewChild(NgForm) form: NgForm;

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
