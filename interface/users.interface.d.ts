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
   * @param usernamecn 可选，根据用户中文名，过滤查询结果
   * @param permission 可选，根据用户类型，过滤查询结果
   *
   * method = GET
   * path = '/queryAll'
   */
  queryAll(usernamecn: string,
           permission: string): UserInfo[]

  /**
   * 新增用户
   *
   * method = PUT
   * path = '/insert'
   */
  insert(user: UserInfo): {/* 是否存在用户 */exist: boolean,/* 创建完成情况 */inserted: boolean}

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
   */
  update(user: UserInfo): {/* 更新完成情况 */updated: boolean}
}
