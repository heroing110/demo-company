import {Component, OnInit} from '@angular/core';
import {Season} from "../../../entity/season";
import {SeasonService} from "../season.service";
import {Router} from "@angular/router";
import {UserService} from "../../share/user.service";

@Component({
  selector: 'app-season-add',
  templateUrl: './season-add.component.html',
  styleUrls: ['./season-add.component.css']
})
export class SeasonAddComponent implements OnInit {
  seasonObj: Season = new Season();

  constructor(private seasonService: SeasonService,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    const user = this.userService.getUserInfo();
    this.seasonObj.companyName = user.companyName || '未设置单位名称'; // 单位名称
  }

  save() {
    this.seasonService.addSeason(this.seasonObj).then((result) => {
      if (result.inserted) {
        this.router.navigate(['report/season/list']);
      } else if (result.message) {
        alert(result.message);
      } else {
        alert('添加报表失败');
      }
    });
  }
}
