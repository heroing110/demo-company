/**
 * Created by Administrator on 2016/12/12 0012.
 */
import {DbModel} from "./base.model";
import {Year} from "../web/src/app/report/year";


class YearModel extends DbModel<Year> {
    public bean = Object.keys(new Year);
    public arrayBean = ['industry', 'sale', 'crossContry'];
    public name = 'year_message';

    constructor() {
        super();
    }
}

export const yearModel = new YearModel();