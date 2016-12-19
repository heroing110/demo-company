/**
 * Created by Administrator on 2016/12/12 0012.
 */
import {DbModel} from "./base.model";

export class User {
    username: string = '';
    password: string = '';
    permission: string = '';
}

class UsersModel extends DbModel<User> {
    bean = Object.keys(new User);
    name = 'users';

    constructor() {
        super();
    }
}

export const userModel = new UsersModel();