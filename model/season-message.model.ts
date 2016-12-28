/**
 * Created by Administrator on 2016/12/12 0012.
 */
import {DbModel} from "./base.model";
import {Season} from "../entity/season";


class SeasonMessageModel extends DbModel<Season> {
    public bean = Object.keys(new Season);
    public arrayBean = [];
    public name = 'season_message';

    constructor() {
        super();
    }
}

export const seasonMessageModel = new SeasonMessageModel();