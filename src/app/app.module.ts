import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReportModule} from "./report/report.module";
import {ShareModule} from "./share/share.module";
import {AppRoutingModule} from "./app-routing.module";
import {LoginModule} from "./login/login.module";
import {HttpModule} from "@angular/http";
import {AuthGuard} from "./auth-guard.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    ShareModule,
    ReportModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
