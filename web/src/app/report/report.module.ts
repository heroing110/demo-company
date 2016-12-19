import {NgModule} from '@angular/core';
import {ReportComponent} from './report.component';
import {ShareModule} from "../share/share.module";
import {WelcomeComponent} from './welcome/welcome.component';
import {ReportRoutingModule} from "./report-routing.module";
import {SeasonAddComponent} from "./season-add/season-add.component";
import {SeasonListComponent} from "./season-list/season-list.component";
import {YearAddComponent} from './year-add/year-add.component';
import {YearListComponent} from "./year-list/year-list.component";
import {SeasonService} from "./season.service";
import {YearService} from "./year.service";
import { SeasonDetailComponent } from './season-detail/season-detail.component';
import { SeasonTemplateComponent } from './season-template/season-template.component';
import {YearTemplateComponent} from "./year-template/year-template.component";
import {YearDetailComponent} from "./year-detail/year-detail.component";

@NgModule({
  imports: [
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
    YearTemplateComponent
  ],
  providers: [
    SeasonService,
    YearService
  ]
})
export class ReportModule {
}
