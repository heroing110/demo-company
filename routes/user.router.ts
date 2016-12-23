import {Router} from "express";
import {userModel} from '../model/user.model';
import {UserInfo} from "../web/src/app/share/user-info";
import {md5} from "../util/index";
const router = Router();

// post  app/users
router.post('/', function (req, res) {
    req.body['password'] = md5(req.body['password']);
    res.send([{}]);
    /*userModel.queryAll(req.body, function (rows: UserInfo[]) {
     });*/
});


export default router;