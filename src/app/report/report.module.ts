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
import {SeasonIndustryTemplate1Component} from "./season-template/season-industry-template1/season-industry-template1.component";
import {SeasonIndustryTemplate2Component} from "./season-template/season-industry-template2/season-industry-template2.component";
import {SeasonIndustryTemplate3Component} from "./season-template/season-industry-template3/season-industry-template3.component";
import {UserManagementComponent} from "./user-management/user-management.component";
import {UserManagementService} from "./user-management.service";
import {UserPermissionPipe} from "./user-management/user-permission.pipe";
import {CityPipe} from "./city.pipe";
import {ModifyPasswordComponent} from "./user-management/modify-password/modify-password.component";
import {ModifyUserComponent} from "./user-management/modify-user/modify-user.component";

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

    SeasonIndustryTemplate1Component,
    SeasonIndustryTemplate2Component,
    SeasonIndustryTemplate3Component,

    SeasonChartComponent,

    UserManagementComponent,
    ModifyPasswordComponent,
    ModifyUserComponent,
    UserPermissionPipe,
    CityPipe
  ],
  providers: [
    SeasonService,
    YearService,
    UserManagementService
  ]
})
export class ReportModule {
}
