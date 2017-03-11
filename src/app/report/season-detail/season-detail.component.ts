import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {SeasonService} from "../season.service";
import {Season} from "../../../entity/season";
import {UserService} from "../../share/user.service";
import {LayerService} from "../../share/layer.service";

@Component({
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.css']
})
export class SeasonDetailComponent implements OnInit {

  seasonObj: Season;
  readonlyAll = false;

  constructor(private activatedRoute: ActivatedRoute,
              private seasonService: SeasonService,
              private router: Router,
              private layerService: LayerService,
              private userService: UserService) {
  }

  ngOnInit() {
    if (this.userService.getUserInfo().permission == '1') {
      // 普通管理员用户将无法修改
      this.readonlyAll = true;
    }
    this.activatedRoute.params
      .switchMap((params: Params) => this.seasonService.getSeasonDetail(params['seasonId']))
      .subscribe((season: Season) => this.seasonObj = season);
  }

  save() {
    this.layerService.open();
    this.seasonService.updateSeason(this.seasonObj).then((result) => {
      if (result.updated) {
        this.router.navigate(['report/seasonObj/list']);
      } else if (result.message) {
        alert(result.message);
      } else {
        alert('修改报表失败')
      }
      this.layerService.close();
    });
  }

}
