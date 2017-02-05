// Created by baihuibo on 2017/1/31.
import {Season} from "../src/entity/season";

// path = '/api/season'
export interface SeasonServiceInterface {
    // GET
    queryAll(cityId: string,
             userId: string,
             permission: string,
             companyName: string): Season[]

    // GET path = '/detail'
    queryDetail(seasonId: string): Season

    // GET path = '/chart'
    queryChart(): Season[]

    // POST path = '/insert'
    insert(season: Season): {/* 是否存在本年度报表 */exist: boolean, /* 创建完成情况 */inserted: boolean}

    // PUT path = '/update', params='seasonId'
    update(season: Season): {/* 更新完成情况 */updated: boolean}
}
