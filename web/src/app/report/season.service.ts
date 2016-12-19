import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {Season} from "./season";

@Injectable()
export class SeasonService {
  private url = 'app/season';

  constructor(private http: Http) {

  }

  getSeasonByParam(query: Object = {}) {
    const search = new URLSearchParams();
    for (const key in query) {
      search.append(key, query[key]);
    }
    return this.http.get(this.url, {search}).toPromise().then(this.response);
  }

  addSeason(season: Season) {
    return this.http.post(this.url, season).toPromise().then(this.response);
  }

  updateSeason(season: Season) {
    // app/season/:id
    // app/season/1
    return this.http.put(this.url + '/' + season.id, season).toPromise().then(this.response);
  }

  response(res) {
    const json = res.json();
    return json ? json.data : json;
  }
}
