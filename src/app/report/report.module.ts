import {NgModule} from '@angular/core';
import {ShareModule} from "../share/share.module";
import {ReportRoutingModule} from "./report-routing.module";

import {SeasonService} from "./season.service";
import {YearService} from "./year.service";

import {WelcomeComponent} from './welcome/welcome.component';
import {ReportComponent} from './report.component';
import {SeasonAddComponent} from "./season-add/season-add.component";
import {SeasonListComponent} from "./season-list/season-list.component";
import {YearAddComponent} from './year-add/year-add.component';
import {YearListComponent} from "./year-list/year-list.component";
import {SeasonDetailComponent} from './season-detail/season-detail.component';
import {SeasonTemplateComponent} from './season-template/season-template.component';
import {YearTemplateComponent} from "./year-template/year-template.component";
import {YearDetailComponent} from "./year-detail/year-detail.component";
import {SeasonChartComponent} from "./season-chart/season-chart.component";
import {Ng2PaginationModule} from "ng2-pagination";
import {YearIndustryTemplate1Component} from "./year-template/year-industry-template1/year-industry-template1.component";
import {YearIndustryTemplate2Component} from "./year-template/year-industry-template2/year-industry-template2.component";
import {YearIndustryTemplate3Component} from "./year-template/year-industry-template3/year-industry-template3.component";

@NgModule({
  imports: [
    Ng2PaginationModule,
    ShareModule,
    ReportRoutingModule
  ],
  declarations: [
    ReportComponent,
    WelcomeComponent,
    SeasonAddComponent,
    SeasonListComponent,
    YearAddComponent,
    YearListComponent,
    SeasonDetailComponent,
    YearDetailComponent,
    SeasonTemplateComponent,

    YearTemplateComponent,
    YearIndustryTemplate1Component,
    YearIndustryTemplate2Component,
    YearIndustryTemplate3Component,

    SeasonChartComponent
  ],
  providers: [
    SeasonService,
    YearService
  ]
})
export class ReportModule {
}
