import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {YearService} from "../year.service";
import {Year} from "../../../entity/year";
import {UserService} from "../../share/user.service";
import {LayerService} from "../../share/layer.service";

@Component({
  selector: 'app-year-detail',
  templateUrl: './year-detail.component.html',
  styleUrls: ['./year-detail.component.css']
})
export class YearDetailComponent implements OnInit {

  yearObj: Year;
  readonlyAll = false;

  constructor(private activatedRoute: ActivatedRoute,
              private yearService: YearService,
              private router: Router,
              private layerService: LayerService,
              private userService: UserService) {
  }

  ngOnInit() {
    if (this.userService.getUserInfo().permission == '1') {
      this.readonlyAll = true;// 普通用户无法修改报表数据
    }
    this.activatedRoute.params
      .switchMap((params: Params) => this.yearService.getYear(params['yearId']))
      .subscribe((year: Year) => this.yearObj = year);
  }

  save() {
    this.layerService.open();
    this.yearService.updateYear(this.yearObj).then((result) => {
      if (result.updated) {
        this.router.navigate(['report/year/list']);
      } else if (result.message) {
        alert(result.message);
      } else {
        alert('修改报表失败');
      }
      this.layerService.close();
    });
  }

}
