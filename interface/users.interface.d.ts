// Created by baihuibo on 2017/1/31.

import {UserInfo} from "../src/entity/user-info";

// path = '/api/users'
export interface UsersServiceInterface {

    // POST  path = '/login'
    login(username: string,
          password: string): {login: boolean, user: UserInfo};
}