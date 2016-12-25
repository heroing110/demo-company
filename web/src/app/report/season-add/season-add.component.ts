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
    }

    save() {
        this.seasonService.addSeason(this.season).then((result) => {
            if (result && result['insertId']) {
                this.router.navigate(['report/season/list']);
            } else {
                alert('添加失败');
            }
        });
    }
}
