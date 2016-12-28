/**
 * Created by Administrator on 2016/12/12 0012.
 */
import {DbModel} from "./base.model";
import {Season} from "../entity/season";
import {Report} from "../entity/report";


class SeasonReportModel extends DbModel<Report> {
    public bean = Object.keys(new Report());
    public arrayBean = [];
    public name = 'season_report';

    constructor() {
        super();
    }
}

export const seasonReportModel = new SeasonReportModel();