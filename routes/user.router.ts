import {Router} from "express";
import {userModel} from '../model/user.model';
import {UserInfo} from "../web/src/app/share/user-info";
import {md5} from "../util/index";
const router = Router();

router.post('', function (req, res) {
    req.body['password'] = md5(req.body['password']);

    userModel.queryAll(req.body, function (rows: UserInfo[]) {
        res.send(rows);
    });
});

export default router;