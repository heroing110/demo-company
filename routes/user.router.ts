import {Router} from "express";
import {userModel} from '../model/user.model';
import {UserInfo} from "../web/src/app/share/user-info";
import {md5} from "../util/index";
const router = Router();

// post  app/users
router.post('/', function (req, res) {
    req.body['password'] = md5(req.body['password']);
    userModel.queryAll(req.body, function (rows: UserInfo[]) {
        const session: any = req['session'];
        session.user = rows[0] || {};
        res.send({
            login: rows.length > 0,
            user: rows[0]
        });
    });
});

router.get('/userInfo', function (req, res) {
    const session: any = req['session'];
    res.send({
        user: session.user
    });
});

router.get('/logout', function (req, res) {
    const session: any = req['session'];
    session.user = null;
    res.send({logout: true});
});


export default router;