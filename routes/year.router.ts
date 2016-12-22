import {Router} from "express";
import {yearModel} from "../model/year.model";
import {Response, Request} from "express-serve-static-core";
import {Year} from "../web/src/app/report/year";
const router = Router();

/* GET home page. */


router.get('', function (req: Request, res, next) {
    yearModel.queryAll(req.query, function (rows: Year[]) {
        res.send(rows);
    });
});

router.post('', function (req, res, next) {
    console.log('req,query',req.query);
    // yearModel.insert(req.body, function () {
    //     res.end('ok');
    // });
});



router.get('/seaso', function (req: Request, res: Response) {

});

export default router;