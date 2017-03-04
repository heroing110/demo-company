import {Component, OnInit, Input} from '@angular/core';
import {TemplateCommonCtrl} from "../../template-common-ctrl";
import {Season} from "../../../../entity/season";

@Component({
  selector: 'app-season-industry-template3',
  templateUrl: 'season-industry-template3.component.html'
})
export class SeasonIndustryTemplate3Component extends TemplateCommonCtrl implements OnInit {
  @Input() seasonObj: Season;

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
