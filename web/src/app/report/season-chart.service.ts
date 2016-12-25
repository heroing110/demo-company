import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {Season} from "./season";
import {responseHandler} from "../util";

@Injectable()
export class SeasonChartService {
    private url = 'app/season';

    constructor(private http: Http) {

    }

    queryChart(query: Object = {}) {
        const search = new URLSearchParams();
        for (const key in query) {
            search.append(key, query[key]);
        }
        return this.http.get(this.url+'/chart', {search}).toPromise().then(responseHandler);
    }


}
