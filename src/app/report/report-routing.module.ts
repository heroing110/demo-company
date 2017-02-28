import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {ReportComponent} from "./report.component";
import {SeasonAddComponent} from "./season-add/season-add.component";
import {SeasonListComponent} from "./season-list/season-list.component";
import {YearAddComponent} from "./year-add/year-add.component";
import {YearListComponent} from "./year-list/year-list.component";
import {SeasonDetailComponent} from "./season-detail/season-detail.component";
import {YearDetailComponent} from "./year-detail/year-detail.component";
import {SeasonChartComponent} from "./season-chart/season-chart.component";
import {AuthGuard} from "../auth-guard.service";
import {UserManagementComponent} from "./user-management/user-management.component";

const routes: Routes = [
  {
    path: 'report',
    component: ReportComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {path: 'welcome', component: WelcomeComponent},
      {path: 'user-management', component: UserManagementComponent},
      {path: 'season/add', component: SeasonAddComponent},
      {path: 'season/list', component: SeasonListComponent},
      {path: 'season/detail/:seasonId', component: SeasonDetailComponent},
      {path: 'season/chart/:userId', component: SeasonChartComponent},
      {path: 'year/detail/:yearId', component: YearDetailComponent},
      {path: 'year/add', component: YearAddComponent},
      {path: 'year/list', component: YearListComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule {
}
