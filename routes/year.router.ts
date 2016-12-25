import {Router} from "express";
import {yearModel} from "../model/year.model";
import {Request} from "express-serve-static-core";
import {Year} from "../web/src/app/report/year";
const yearRouter = Router();


yearRouter
    .get('/', function (req: Request, res) {
        yearModel.queryAll(req.query, function (rows: Year[]) {
            res.send(rows);
        });
    })
    .post('/insert', function (req: Request, res) {
        yearModel.insert(req.body, function (result) {
            res.send(result);
        })
    })
    .put('/:id', function (req: Request, res) {
        yearModel.update(req.body, {id: req.params.id}, function (result) {
            res.send(result);
        })
    })

export default yearRouter;