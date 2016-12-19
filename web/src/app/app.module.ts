import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReportModule} from "./report/report.module";
import {ShareModule} from "./share/share.module";
import {AppRoutingModule} from "./app-routing.module";
import {LoginModule} from "./login/login.module";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemDataService} from "./in-mem-data-service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    ShareModule,
    ReportModule,
    LoginModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemDataService, {delay: 200})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
