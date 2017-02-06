import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {Year} from "../../entity/year";
import {responseHandler} from "../util";
import {UserService} from "../share/user.service";
import {UserInfo} from "../../entity/user-info";

@Injectable()
export class YearService {
  constructor(private http: Http, private userService: UserService) {
  }

  getYearList(companyName: string) {
    const search = new URLSearchParams();
    const user: UserInfo = this.userService.getUserInfo();

    search.append('cityId', user.cityid);
    search.append('userId', user.id);
    search.append('permission', user.permission);
    search.append('companyName', companyName);

    return this.http.get('/api/year', {search}).toPromise().then(responseHandler);
  }

  getYear(yearId: string) {
    const search = new URLSearchParams();
    search.append('yearId', yearId);
    return this.http.get('/api/year/detail', {search}).toPromise().then(responseHandler);
  }

  addYear(year: Year) {
    return this.http.post('/api/year/insert', year).toPromise().then(responseHandler);
  }

  updateYear(year: Year) {
    return this.http.put('/api/year/update', year).toPromise().then(responseHandler);
  }
}
