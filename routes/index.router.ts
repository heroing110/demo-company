import {Router} from "express";
import {mediaModel, Media} from "../model/media.model";
import {Response, Request} from "express-serve-static-core";
const router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login',{message:''});
});

router.get('/add', function (req, res, next) {
    res.render('add');
});

router.get('/top', function (req, res, next) {
    res.render('top');
});

router.get('/menu', function (req, res, next) {
    res.render('menu');
});

router.post('/doAdd', function (req, res, next) {
    mediaModel.insert(req.body, function () {
        res.redirect('/list');
    });
});

router.get('/list', function (req: Request, res: Response) {
    mediaModel.queryAll(null, function (rows: Media[]) {
        res.render('list', {rows});
    });
});

export default router;