import {Component, OnInit} from '@angular/core';
import {SeasonService} from "../season.service";
import {Season} from "../../../entity/season";

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.css']
})
export class SeasonListComponent implements OnInit {

  seasonList: Season[];

  companyName:string;

  constructor(private seasonService: SeasonService) {
  }

  ngOnInit() {
    this.query();
  }

  query(companyName?) {
    this.seasonService.getSeasonList(companyName).then((seasons: Season[]) => {
      this.seasonList = seasons;
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
