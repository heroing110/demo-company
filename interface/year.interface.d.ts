// Created by baihuibo on 2017/1/31.
import {Year} from "../src/entity/year";

// path = '/api/year'
export interface YearServiceInterface {
  /**
   * GET
   * 通过 cityid和userid查询
   * permission 表示权限下，如果是超级管理员，则查询全部
   * companyName 单位名称，根据单位名称来查询，如果为 null 表示忽略此条件
   */
  queryAll(cityId: string,
           userId: string,
           permission: string,
           companyName: string): Year[]

  // GET path = '/detail'
  queryDetail(yearId: string): Year

  // POST path = '/insert'
  insert(year: Year): {/* 错误描述 */message: string, /* 创建完成情况 */inserted: boolean}

  // PUT path = '/update', params='yearId'
  update(year: Year): {/* 错误描述 */message: string, /* 更新完成情况 */updated: boolean}
}
