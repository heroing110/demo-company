import {Component, OnInit, Input} from '@angular/core';
import {Year} from "../../../../entity/year";
import {TemplateCommonCtrl} from "../../template-common-ctrl";
import {Season} from "../../../../entity/season";

@Component({
  selector: 'app-season-industry-template2',
  templateUrl: 'season-industry-template2.component.html'
})
export class SeasonIndustryTemplate2Component extends TemplateCommonCtrl implements OnInit {
  @Input() seasonObj: Season;

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
