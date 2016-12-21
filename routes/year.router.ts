import {Router} from "express";
import {yearModel} from "../model/year.model";
import {Response, Request} from "express-serve-static-core";
import {Year} from "../web/src/app/report/year";
const router = Router();

/* GET home page. */


router.get('', function (req: Request, res, next) {
    console.log('req',req);
    yearModel.queryAll(req.params, function (rows: Year[]) {
        res.send(rows);
    });
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
    yearModel.insert(req.body, function () {
        res.redirect('/list');
    });
});

router.get('/seaso', function (req: Request, res: Response) {

});

export default router;