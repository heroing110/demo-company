import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {Season} from "../../../../entity/season";
import {responseHandler} from "../util";

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
        return this.http.get(this.url, {search}).toPromise().then(responseHandler);
    }

    getSeasonDetailByParam(query: Object = {}) {
        const search = new URLSearchParams();
        for (const key in query) {
            search.append(key, query[key]);
        }
        return this.http.get(this.url + '/detail', {search}).toPromise().then(responseHandler);
    }

    addSeason(season: Season) {
        return this.http.post(this.url + '/insert', season).toPromise().then(responseHandler);
    }

    updateSeason(season: Season) {
        // app/season/:id
        // app/season/1
        return this.http.put(this.url + '/' + season.id, season).toPromise().then(responseHandler);
    }
}
