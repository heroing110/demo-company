/**
 * Created by Administrator on 2016/12/12 0012.
 */
import {DbModel} from "./base.model";
import {Year} from "../entity/year";


class YearModel extends DbModel<Year> {
    public bean = Object.keys(new Year);
    public arrayBean = ['industry', 'sale', 'crossCountry'];
    public name = 'year_message';

    constructor() {
        super();
    }
}

export const yearModel = new YearModel();