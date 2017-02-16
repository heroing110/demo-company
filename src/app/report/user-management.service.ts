import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {responseHandler} from "../util";
import {UserInfo} from "../../entity/user-info";

@Injectable()
export class UserManagementService {
  constructor(private http: Http) {
  }

  /**
   * 查询全部用户
   * @param usernamecn 可选，根据用户中文名，过滤查询结果
   * @param permission 可选，根据用户类型，过滤查询结果
   *
   * method = GET
   * path = '/queryAll'
   */
  queryAll(usernamecn: string,
           permission: string): Promise<UserInfo[]> {
    const search = new URLSearchParams();

    search.append('usernamecn', usernamecn);
    search.append('permission', permission);

    return this.http.get('/api/users/queryAll', {search}).toPromise().then(responseHandler);
  }

  /**
   * 新增用户
   *
   * method = PUT
   * path = '/insert'
   */
  insert(user: UserInfo): Promise<{message, inserted}> {
    return this.http.put('/api/users/insert', user).toPromise().then(responseHandler);
  }

  /**
   * 删除用户
   * @param userId
   *
   * method = DELETE
   * path = '/delete'
   */
  delete(userId: string): Promise<{message, removed}> {
    const search = new URLSearchParams();

    search.append('userId', userId);

    return this.http.delete('/api/users/delete', {search}).toPromise().then(responseHandler);
  }

  /**
   * 修改用户信息
   * @param user
   *
   * method = POST
   * path = '/update'
   */
  update(user: UserInfo): Promise<{message, updated}> {
    return this.http.post('/api/users/update', user).toPromise().then(responseHandler);
  }

  /**
   * 修改密码
   * @param userId
   * @param update
   *
   * method = PUT
   * path = '/changePwd'
   */
  changePwd(userId: string, update: {oldPwd, newPwd, confirmPwd}): Promise<{message, updated}> {
    const search = new URLSearchParams();

    search.append('userId', userId);

    return this.http.put('/api/users/changePwd', update, {search}).toPromise().then(responseHandler);
  }
}
