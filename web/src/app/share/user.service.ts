import {Injectable} from "@angular/core";
import {UserInfo} from "./user-info";
import {Http, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {responseHandler,md5} from "../util";
import {createHash} from "crypto";
/**
 * Created by Administrator on 2016/12/13 0013.
 */

@Injectable()
export class UserService {
    private loginState = false;
    private userInfo: UserInfo = null;
    private url = 'app/users';

    constructor(private http: Http) {
    }

    login(username, password) {
        return this.http.post(this.url, {username, password}).toPromise()
            .then(responseHandler)
            .then((userList: UserInfo[]) => {
                this.loginState = userList.length > 0;
            });
    }

    logout() {
        this.loginState = false;
    }

    setUserInfo(userInfo: UserInfo) {
        this.userInfo = userInfo;
    }

    getUserInfo() {
        return this.userInfo;
    }

    isLogin() {
        return this.loginState;
    }

}
