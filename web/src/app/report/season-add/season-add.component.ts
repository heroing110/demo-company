import {Component, OnInit} from '@angular/core';
import {Season} from "../season";
import {SeasonService} from "../season.service";
import {Router} from "@angular/router";
import {Report} from "../report";

@Component({
  selector: 'app-season-add',
  templateUrl: './season-add.component.html',
  styleUrls: ['./season-add.component.css']
})
export class SeasonAddComponent implements OnInit {
  season: Season = new Season();

  constructor(private seasonService: SeasonService, private router: Router) {

  }

  ngOnInit() {
    this.season.id = Math.random();

    this.season.report.id = Math.random();

    this.season.sid = this.season.report.id;
  }

  save() {
    this.seasonService.addSeason(this.season).then((result) => {
      this.router.navigate(['report/season/list']);
    });
  }
}
