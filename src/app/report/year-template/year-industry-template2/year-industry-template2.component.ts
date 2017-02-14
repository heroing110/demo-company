import {Component, OnInit, Input} from '@angular/core';
import {Year} from "../../../../entity/year";
import {TemplateCommonCtrl} from "../../template-common-ctrl";

@Component({
  selector: 'app-year-industry-template2',
  templateUrl: 'year-industry-template2.component.html'
})
export class YearIndustryTemplate2Component extends TemplateCommonCtrl implements OnInit {
  @Input() yearObj: Year;

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
