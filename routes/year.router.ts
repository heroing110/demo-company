import {Router} from "express";
import {yearModel} from "../model/year.model";
import {Response, Request} from "express-serve-static-core";
import {Year} from "../web/src/app/report/year";
const yearRouter = Router();

yearRouter
    .get('/', function (req: Request, res) {
        res.send([{}]);
        /*
         yearModel.queryAll(req.query, function (rows: Year[]) {
         res.send(rows);
         });
         */
    })
    .post('/', function (req: Request, res) {
        console.log('req,body', req.body);
        res.send(req.body);
    });

export default yearRouter;