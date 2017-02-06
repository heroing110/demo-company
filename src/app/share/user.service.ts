import {Injectable} from "@angular/core";
import {UserInfo} from "../../entity/user-info";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {responseHandler} from "../util";

@Injectable()
export class UserService {
  private userInfo: UserInfo = null;

  constructor(private http: Http) {
  }

  login(username, password) {
    return this.http.post('/api/users/login', {username, password}).toPromise()
      .then(responseHandler)
      .then((data) => {
        if (data['login']) {
          this.setUserInfo(data['user']);
        }
      });
  }

  logout() {
    return this.http.get('/api/destroyUser')
      .toPromise()
      .then(responseHandler);
  }

  setUserInfo(userInfo: UserInfo) {
    this.userInfo = userInfo;
  }

  getUserInfo() {
    return this.userInfo;
  }

  private loginPromise: Promise<boolean>;

  isLogin(): Promise<boolean> {
    if (this.userInfo && this.userInfo.id) {
      return Promise.resolve(true);
    } else if (this.loginPromise) {
      return this.loginPromise;
    } else {
      this.loginPromise = this.http.get('/api/getCurrentUser')
        .toPromise()
        .then(responseHandler)
        .then(data => {
          this.loginPromise = null;
          const user = <UserInfo>data['user'];
          if (user && user.id) {
            this.setUserInfo(user);
            return true;
          } else {
            return false;
          }
        });
      return this.loginPromise;
    }
  }
}
