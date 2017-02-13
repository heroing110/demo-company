import {Component, OnInit, PlatformRef} from '@angular/core';
import {Year} from "../../../entity/year";
import {YearService} from "../year.service";
import {Router} from "@angular/router";
import {NgForm, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-year-add',
  templateUrl: './year-add.component.html',
  styleUrls: ['./year-add.component.css']
})
export class YearAddComponent implements OnInit {
  private yearObj: Year;

  constructor(private yearService: YearService, private router: Router) {
    this.yearObj = new Year();
  }

  ngOnInit() {
  }

  save() {
    this.yearService.addYear(this.yearObj).then((result) => {
      if (result.inserted) {
        this.router.navigate(['report/year/list']);
      } else if (result.message) {
        alert(result.message);
      } else {
        alert('添加报表失败');
      }
    });
  }

}
