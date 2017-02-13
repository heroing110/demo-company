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
      .switchMap((params: Params) => this.seasonService.getSeasonDetail(params['seasonId']))
      .subscribe((season: Season) => this.season = season);
  }

  save() {
    this.seasonService.updateSeason(this.season).then((result) => {
      if (result.updated) {
        this.router.navigate(['report/season/list']);
      } else if (result.message) {
        alert(result.message);
      }else{
        alert('修改报表失败')
      }
    });
  }

}
