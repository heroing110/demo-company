 // Created by baihuibo on 2017/1/31.
import {Year} from "../src/entity/year";

// path = '/api/year'
export interface YearServiceInterface {
    // GET 通过cityId和userId索引，1：只传cityId、不传userId表示查本市数据; 2:都不传，查询所有数据；
    queryAll(cityId: string,userId: string): Year[]

    // GET path = '/detail'
    queryDetail(yearId: string): Year

    // POST path = '/insert'
    insert(year: Year): Year

    // PUT path = '/update', params='yearId'
    update(year: Year): Year
}
