import {Router} from "express";
import {userModel} from '../model/user.model';
import {UserInfo} from "../web/src/app/share/user-info";
import {md5} from "../util/index";
const router = Router();

// post  app/users
router.post('/', function (req, res) {
    req.body['password'] = md5(req.body['password']);

    proxy('POST', '/users/login', {}, req.body).then(function (result) {
        const session: any = req['session'];
        session.user = result.user || {};
        res.send(result);
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


const http = require('request-promise');
const host = 'http://192.168.31.239';

function proxy(method: string, path: string, qs = {}, body?) {
    return http({
        method, body, qs,
        uri: host + path,
        json: true
    });
}

export default router;