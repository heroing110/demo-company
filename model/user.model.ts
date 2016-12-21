/**
 * Created by Administrator on 2016/12/12 0012.
 */
import {DbModel} from "./base.model";
import {Year} from "../web/src/app/report/year";
import {UserInfo} from "../web/src/app/share/user-info";


class UserModel extends DbModel<UserInfo> {
    public bean = Object.keys(new Year);
    public arrayBean = [];
    public name = 'users';

    constructor() {
        super();
    }
}

export const userModel = new UserModel();