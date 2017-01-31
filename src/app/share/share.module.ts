import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {UserService} from "./user.service";
import {DatepickerDirective} from './datepicker.directive';
import {SelectpickerDirective} from './selectpicker.directive';
import {EqualSumDirective} from './equal-sum.directive';
import {TooltipDirective} from './tooltip.directive';
import {EchartsDirective} from "./echarts.directive";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [UserService],
  exports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    DatepickerDirective,
    EqualSumDirective,
    SelectpickerDirective,
    TooltipDirective,
    EchartsDirective
  ],
  declarations: [DatepickerDirective , EchartsDirective, SelectpickerDirective, EqualSumDirective, TooltipDirective]
})
export class ShareModule {
}
