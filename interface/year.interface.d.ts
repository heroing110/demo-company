// Created by baihuibo on 2017/1/31.
import {Year} from "../src/entity/year";

// path = '/api/year'
export interface YearServiceInterface {
    // GET
    queryAll(userId: string, permission: string): Year[]

    // GET path = '/detail'
    queryDetail(yearId: string): Year

    // POST path = '/insert'
    insert(userId: string, year: Year): Year

    // PUT path = '/update', params='yearId'
    update(yearId: string, year: Year): Year
}