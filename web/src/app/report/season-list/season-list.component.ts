import {Component, OnInit} from '@angular/core';
import {SeasonService} from "../season.service";
import {Season} from "../season";

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.css']
})
export class SeasonListComponent implements OnInit {

  seasonList: Season[];

  constructor(private seasonService: SeasonService) {
  }

  ngOnInit() {
    this.seasonService.getSeasonByParam().then((seasons: Season[]) => {
      this.seasonList = seasons;
    });
  }


}
