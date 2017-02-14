import {Component, OnInit, Input} from '@angular/core';
import {Year} from "../../../../entity/year";
import {TemplateCommonCtrl} from "../../template-common-ctrl";


//////// 电子商务应用企业

@Component({
  selector: 'app-year-industry-template1',
  templateUrl: 'year-industry-template1.component.html'
})
export class YearIndustryTemplate1Component extends TemplateCommonCtrl implements OnInit {
  @Input() yearObj: Year;

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
