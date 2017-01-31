import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {ShareModule} from "../share/share.module";

@NgModule({
  imports: [
    ShareModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
