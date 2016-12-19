import {Injectable} from "@angular/core";
import {UserInfo} from "./user-info";
import {Http, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/toPromise';
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
    const search = new URLSearchParams();
    search.set('username', username);
    search.set('password', password);

    return this.http.get(this.url, {search}).toPromise().then((res) => {
      return res.json().data;
    }).then((userList: UserInfo[]) => {
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
