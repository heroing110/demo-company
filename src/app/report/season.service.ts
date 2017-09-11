import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {responseHandler} from "../util";
import {Season} from "../../entity/season";
import {UserInfo} from "../../entity/user-info";
import {UserService} from "../share/user.service";

@Injectable()
export class SeasonService {
  constructor(private http: Http, private userService: UserService) {
  }

  getSeasonList(companyName: string, cityid?, season?, year?): Promise<Season[]> {
    const user: UserInfo = this.userService.getUserInfo();
    const search = new URLSearchParams();

    search.append('companyName', companyName);
    search.append('userId', user.id);
    search.append('permission', user.permission);
    if (season) {
      search.append('season', season);
    }
    if (year) {
      search.append('year', year);
    }
    if (user.permission == '0' && cityid) {
      search.append('cityId', cityid);
    } else if (user.permission != '0') {
      search.append('cityId', user.cityid);
    }

    return this.http.get('/api/season', {search}).toPromise().then(responseHandler);
  }

  getSeasonDetail(seasonId: string): Promise<Season> {
    const search = new URLSearchParams();
    search.append('seasonId', seasonId);
    return this.http.get('/api/season/detail', {search}).toPromise().then(responseHandler);
  }

  addSeason(season: Season): Promise<{ inserted, message }> {
    const user: UserInfo = this.userService.getUserInfo();
    season.userId = user.id;
    season.permission = user.permission;
    season.cityId = user.cityid;
    return this.http.post('/api/season/insert', season).toPromise().then(responseHandler);
  }

  updateSeason(season: Season): Promise<{ updated, message }> {
    return this.http.put('/api/season/update', season).toPromise().then(responseHandler);
  }

  removeSeason(seasonId: string): Promise<{ removed, message }> {
    const search = new URLSearchParams();
    search.append('seasonId', seasonId);
    return this.http.get('/api/season/remove', {search}).toPromise().then(responseHandler);
  }

  queryChart(userId: string): Promise<Season[]> {
    const search = new URLSearchParams();
    search.append('userId', userId);
    return this.http.get('/api/season/chart', {search}).toPromise().then(responseHandler);
  }
}
