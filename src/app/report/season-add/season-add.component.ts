import {Component, OnInit, Input} from '@angular/core';
import {Season} from "../../../entity/season";
import {SeasonService} from "../season.service";
import {Router} from "@angular/router";

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
            console.log('result',result);
            if (result && result['insertId']) {
                this.router.navigate(['report/season/list']);
            } else if(result['exist']){
                alert('本年度已存在该季度数据');
            } else{
                alert('添加失败');
            }
        });
    }
}
