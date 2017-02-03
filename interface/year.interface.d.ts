// Created by baihuibo on 2017/1/31.
import {Year} from "../src/entity/year";

// path = '/api/year'
export interface YearServiceInterface {
  /**
   * GET
   * 通过 cityid和userid查询
   * permission 表示权限下，如果是超级管理员，则查询全部
   */
  queryAll(cityId: string, userId: string, permission: string): Year[]

  // GET path = '/detail'
  queryDetail(yearId: string): Year

  // POST path = '/insert'
  insert(year: Year): Year

  // PUT path = '/update', params='yearId'
  update(year: Year): Year
}
