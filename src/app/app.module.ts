import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReportModule} from "./report/report.module";
import {ShareModule} from "./share/share.module";
import {AppRoutingModule} from "./app-routing.module";
import {LoginModule} from "./login/login.module";
import {HttpModule, Http} from "@angular/http";
import {AuthGuard} from "./auth-guard.service";
import {LocalHttpProxyService} from "./local-http-proxy.service";
import {environment} from "../environments/environment";

let providers:any[] = [AuthGuard];
if (!environment.production) {
  providers.push({
    provide: Http,
    useClass: LocalHttpProxyService
  });
}

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
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule {
}
