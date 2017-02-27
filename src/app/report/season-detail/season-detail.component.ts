import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {SeasonService} from "../season.service";
import {Season} from "../../../entity/season";
import {UserService} from "../../share/user.service";

@Component({
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.css']
})
export class SeasonDetailComponent implements OnInit {

  seasonObj: Season;
  readonlyAll = false;

  constructor(private activatedRoute: ActivatedRoute,
              private seasonService: SeasonService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .switchMap((params: Params) => this.seasonService.getSeasonDetail(params['seasonId']))
      .subscribe((season: Season) => this.seasonObj = season);

    if (this.userService.getUserInfo().permission == '2') {// 权限2的用户不允许修改任何内容
      this.readonlyAll = true;
    }
  }

  save() {
    this.seasonService.updateSeason(this.seasonObj).then((result) => {
      if (result.updated) {
        this.router.navigate(['report/season/list']);
      } else if (result.message) {
        alert(result.message);
      } else {
        alert('修改报表失败')
      }
    });
  }

}
