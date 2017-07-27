import {Component, OnInit} from '@angular/core';
import {SeasonService} from "../season.service";
import {Season} from "../../../entity/season";
import {UserService} from "../../share/user.service";
import {City} from "../../../entity/city";

const firstBy = require('thenby');

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.css']
})
export class SeasonListComponent implements OnInit {

  seasonList: Season[];

  companyName: string = '';
  cityid: string;
  citys: City[];

  constructor(private seasonService: SeasonService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllCity().then(citys => this.citys = citys);
    this.query();
  }

  query(companyName?, cityid?) {
    this.seasonService.getSeasonList(companyName, cityid).then((seasons: Season[]) => {
      this.seasonList = seasons;
      this.seasonList.sort(firstBy('cityId').thenBy('season'));
    });
  }

  removeSeason(seasonId: string) {
    if (confirm('确定删除此报表？')) {
      this.seasonService.removeSeason(seasonId).then((result) => {
        if (result.removed) {
          alert('删除成功');
          this.query(this.companyName);
        } else {
          alert(result.message);
        }
      });
    }
  }

}
