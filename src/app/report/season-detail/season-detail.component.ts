import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {SeasonService} from "../season.service";
import {Season} from "../../../entity/season";

@Component({
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.css']
})
export class SeasonDetailComponent implements OnInit {

  private season: Season;

  constructor(private activatedRoute: ActivatedRoute,
              private seasonService: SeasonService,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .switchMap((params: Params) => this.seasonService.getSeasonDetailByParam(params))
      .subscribe((season: Season[]) => this.season = season[0]);
    this
  }

  save() {
    this.seasonService.updateSeason(this.season).then((res) => {
      this.router.navigate(['report/season/list']);
    });
  }

}
