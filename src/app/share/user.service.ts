import {Injectable} from "@angular/core";
import {UserInfo} from "../../entity/user-info";
import {Http, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {responseHandler} from "../util";
import {City} from "../../entity/city";

@Injectable()
export class UserService {
  private userInfo: UserInfo;
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
    return this.http.get('/api/destroyUser').toPromise()
      .then(responseHandler);
  }

  changePwd(pwd): Promise<{message, updated}> {
    const search = new URLSearchParams();
    search.append('userId', this.userInfo.id);
    return this.http.post('/api/users/changePwd', pwd, {search}).toPromise()
      .then(responseHandler);
  }

  private citys: City[];

  getAllCity(): Promise<City[]> {
    if (this.citys) {
      return Promise.resolve(this.citys);
    }
    return this.http.get('/api/users/allCity').toPromise()
      .then(responseHandler)
      .then((res: {[cityId: string]: string}) => {
        let citys: City[];

        if (Array.isArray(res)) {
          citys = <City[]>res;
        } else if (res) {
          citys = Object.keys(res).map(id => ({id, name: res[id]}));
        }
        return this.citys = citys;
      });
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
