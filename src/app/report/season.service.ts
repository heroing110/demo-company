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

  getSeasonList(companyName: string) {
    const user: UserInfo = this.userService.getUserInfo();
    const search = new URLSearchParams();

    search.append('companyName', companyName);
    search.append('cityId', user.cityid);
    search.append('userId', user.id);
    search.append('permission', user.permission);

    return this.http.get('/api/season', {search}).toPromise().then(responseHandler);
  }

  getSeasonDetail(seasonId: string) {
    const search = new URLSearchParams();
    search.append('seasonId', seasonId);
    return this.http.get('/api/season/detail', {search}).toPromise().then(responseHandler);
  }

  addSeason(season: Season) {
    return this.http.post('/api/season/insert', season).toPromise().then(responseHandler);
  }

  updateSeason(season: Season) {
    return this.http.put('/api/season/update', season).toPromise().then(responseHandler);
  }

  queryChart() {
    return this.http.get('/api/season/chart').toPromise().then(responseHandler);
  }
}
