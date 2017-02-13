import {Injectable} from "@angular/core";
import {UserInfo} from "../../entity/user-info";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {responseHandler} from "../util";

@Injectable()
export class UserService {
  private userInfo: UserInfo = null;
  private loginPromise: Promise<boolean>;

  constructor(private http: Http) {
  }

  login(username, password): Promise<{login, user}> {
    return this.http.post('/api/users/login', {username, password}).toPromise()
      .then(responseHandler)
      .then((data) => {
        if (data['login']) {
          this.userInfo = data['user'];
        }
        return data;
      });
  }

  logout() {
    return this.http.get('/api/destroyUser')
      .toPromise()
      .then(responseHandler);
  }

  getUserInfo(): UserInfo {
    return this.userInfo;
  }

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
            this.userInfo = user;
            return true;
          } else {
            return false;
          }
        });
      return this.loginPromise;
    }
  }
}
