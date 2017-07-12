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
import {AuthGuard} from "../auth-guard.service";
import {UserManagementComponent} from "./user-management/user-management.component";
import {CityResolve} from "./city-resolve.service";
import {ReportBatchExportComponent} from "./report-batch-export/report-batch-export.component";

const routes: Routes = [
  {
    path: 'report',
    component: ReportComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {path: 'welcome', component: WelcomeComponent},
      {
        path: 'reportBatchExport', component: ReportBatchExportComponent,
        resolve: {
          citys: CityResolve
        }
      },
      {
        path: 'user-management',
        component: UserManagementComponent,
        resolve: {
          citys: CityResolve
        }
      },
      {path: 'season/add', component: SeasonAddComponent},
      {path: 'season/list', component: SeasonListComponent},
      {path: 'season/detail/:seasonId', component: SeasonDetailComponent},
      {path: 'year/detail/:yearId', component: YearDetailComponent},
      {path: 'year/add', component: YearAddComponent},
      {path: 'year/list', component: YearListComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CityResolve]
})
export class ReportRoutingModule {
}
