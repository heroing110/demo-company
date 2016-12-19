import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {Year} from "./year";

@Injectable()
export class YearService {
  private url = 'app/year';

  constructor(private http: Http) {

  }

  getYearList() {
    return this.http.get(this.url).toPromise().then(function (res) {
      return res.json().data;
    });
  }

  addYear(year: Year) {
    return this.http.post(this.url, year).toPromise().then(function (res) {
      return res.json().data;
    });
  }

  updateYear(year: Year) {
    // app/year/:id
    // app/year/1
    return this.http.put(this.url + '/' + year.id, year).toPromise().then(this.response);
  }

  getSeasonByParam(query: Object = {}) {
    const search = new URLSearchParams();
    for (const key in query) {
      search.append(key, query[key]);
    }
    return this.http.get(this.url, {search}).toPromise().then(this.response);
  }

  response(res) {
    const json = res.json();
    return json ? json.data : json;
  }
}
