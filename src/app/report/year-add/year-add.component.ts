import {Component, OnInit} from '@angular/core';
import {Year} from "../../../entity/year";
import {YearService} from "../year.service";
import {Router} from "@angular/router";
import {UserService} from "../../share/user.service";
import {LayerService} from "../../share/layer.service";

@Component({
  selector: 'app-year-add',
  templateUrl: './year-add.component.html',
  styleUrls: ['./year-add.component.css']
})
export class YearAddComponent implements OnInit {
  yearObj: Year = new Year();

  constructor(private yearService: YearService,
              private router: Router,
              private userService: UserService,
              private layerService: LayerService) {
  }

  ngOnInit() {
    const user = this.userService.getUserInfo();
    this.yearObj.companyName = user.companyName || '未设置单位名称'; // 单位名称
  }

  save() {
    this.layerService.open();
    this.yearService.addYear(this.yearObj).then((result) => {
      if (result.inserted) {
        this.router.navigate(['report/year/list']);
      } else if (result.message) {
        alert(result.message);
      } else {
        alert('添加报表失败');
      }
      this.layerService.close();
    });
  }

}
