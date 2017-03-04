import {Component, OnInit, Input} from '@angular/core';
import {TemplateCommonCtrl} from "../../template-common-ctrl";
import {Season} from "../../../../entity/season";


//////// 电子商务应用企业

@Component({
  selector: 'app-season-industry-template1',
  templateUrl: 'season-industry-template1.component.html'
})
export class SeasonIndustryTemplate1Component extends TemplateCommonCtrl implements OnInit {
  @Input() seasonObj: Season;

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
