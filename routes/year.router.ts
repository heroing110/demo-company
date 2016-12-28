import {Router} from "express";
import {yearModel} from "../model/year.model";
import {Request} from "express-serve-static-core";
import {Year} from "../entity/year";
import {setUserId} from "../util/index";
const yearRouter = Router();


yearRouter
    .get('/', function (req, res) {
        setUserId(req,req.query);
        yearModel.queryAll(req.query, function (rows: Year[]) {
            res.send(rows);
        });
    })
    .post('/insert', function (req: Request, res) {
        setUserId(req,req.body);
        yearModel.insert(req.body, function (result) {
            res.send(result);
        })
    })
    .put('/:id', function (req: Request, res) {
        setUserId(req,req.body);
        yearModel.update(req.body, {id: req.params.id}, function (result) {
            res.send(result);
        })
    })

export default yearRouter;