// Created by baihuibo on 2017/1/31.

// path = '/api/season'
import {Season} from "../src/entity/season";
export interface SeasonServiceInterface {
    // GET
    queryAll(userId: string, permission: string): Season[]

    // GET path = '/detail'
    queryDetail(seasonId: string): Season

    // GET path = '/chart'
    queryChart(): Season[]

    // POST path = '/insert'
    insert(userId: string, season: Season): Season

    // PUT path = '/update', params='seasonId'
    update(seasonId: string, season: Season): Season
}