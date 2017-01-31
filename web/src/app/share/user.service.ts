import {Injectable} from "@angular/core";
import {UserInfo} from "./user-info";
import {Http, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {responseHandler, md5} from "../util";
import {createHash} from "crypto";
/**
 * Created by Administrator on 2016/12/13 0013.
 */

@Injectable()
export class UserService {
    private userInfo: UserInfo = null;
    private url = 'app/users';

    constructor(private http: Http) {
    }

    login(username, password) {
        return this.http.post(this.url, {username, password}).toPromise()
            .then(responseHandler)
            .then((data) => {
                if (data['login']) {
                    this.setUserInfo(data['user']);
                }
            });
    }

    logout() {
        return this.http.get(this.url + '/logout')
            .toPromise()
            .then(responseHandler);
    }

    setUserInfo(userInfo: UserInfo) {
        console.log('userinfo', userInfo);
        this.userInfo = userInfo;
    }

    getUserInfo() {
        return this.userInfo;
    }

    isLogin(): Promise<boolean> {
        if (this.userInfo && this.userInfo.id) {
            return Promise.resolve(true);
        } else {
            return this.http.get(this.url + '/userInfo')
                .toPromise()
                .then(responseHandler)
                .then(data => {
                    const user = <UserInfo>data['user'];
                    if (user && user.id) {
                        this.setUserInfo(user);
                        return true;
                    } else {
                        return false;
                    }
                });
        }
    }
}
