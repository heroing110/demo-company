import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {YearService} from "../year.service";
import {Year} from "../year";

@Component({
  selector: 'app-year-detail',
  templateUrl: './year-detail.component.html',
  styleUrls: ['./year-detail.component.css']
})
export class YearDetailComponent implements OnInit {

  private yearObj:Year;

  constructor(private activatedRoute: ActivatedRoute,
  private yearService:YearService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .switchMap((params: Params) => this.yearService.getSeasonByParam(params))
      .subscribe((year: Year[]) => this.yearObj = year[0]);
  }

  save() {
    this.yearService.updateYear(this.yearObj).then((res) => {
      this.router.navigate(['report/year/list']);
    });
  }

}
