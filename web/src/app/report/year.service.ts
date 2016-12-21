import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {Year} from "./year";
import {responseHandler} from "../util";

@Injectable()
export class YearService {
    private url = 'app/year';

    constructor(private http: Http) {

    }

    getYearList() {
        return this.http.get(this.url).toPromise().then(responseHandler);
    }

    addYear(year: Year) {
        return this.http.post(this.url, year).toPromise().then(responseHandler);
    }

    updateYear(year: Year) {
        // app/year/:id
        // app/year/1
        return this.http.put(this.url + '/' + year.id, year).toPromise().then(responseHandler);
    }

    getYearByParam(query: Object = {}) {
        console.log('query',query);
        const search = new URLSearchParams();
        for (const key in query) {
            search.append(key, query[key]);
        }
        console.log('search',search);
        return this.http.get(this.url,query).toPromise().then(responseHandler);
    }
}
