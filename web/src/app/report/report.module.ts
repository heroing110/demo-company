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
import {SeasonChartService} from "./season-chart.service";
import {Ng2PaginationModule} from "ng2-pagination";

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
        SeasonChartComponent
    ],
    providers: [
        SeasonService,
        SeasonChartService,
        YearService
    ]
})
export class ReportModule {
}
