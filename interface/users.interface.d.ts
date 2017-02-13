// Created by baihuibo on 2017/1/31.

import {UserInfo} from "../src/entity/user-info";

// path = '/api/users'
export interface UsersServiceInterface {

  /**
   * 用户登陆
   * @param username
   * @param password
   *
   * method = POST
   * path = '/login'
   */
  login(username: string,
        password: string): {login: boolean, user: UserInfo};

  /**
   * 查询全部用户
   * @param userId 必须参数
   * @param permission 必须参数
   * @param params 可选，如果有查询参数，则根据参数过滤查询
   *
   * method = GET
   * path = '/queryAll'
   */
  queryAll(userId: string, permission: string, params: Object): UserInfo[]

  /**
   * 新增用户
   *
   * method = PUT
   * path = '/insert'
   */
  insert(user: UserInfo): {/* 创建完成情况 */inserted: boolean}

  /**
   * 删除用户
   * @param userId
   *
   * method = delete
   * path = '/delete'
   */
  delete(userId: string): {/* 删除情况 */removed: boolean}

  /**
   * 修改用户信息
   * @param userId
   * @param user
   *
   * method = POST
   * path = '/update'
   * params = 'userId'
   */
  update(userId: string, user: UserInfo): {/* 更新完成情况 */updated: boolean}
}
