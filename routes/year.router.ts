import {Router} from "express";
import {yearModel} from "../model/year.model";
import {Request} from "express-serve-static-core";
import {Year} from "../src/entity/year";
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
        const yearObj : Year = <Year>req.body;
        console.log('yearObj',yearObj);
        const year_param = {
            userid : yearObj.userid,
            year : yearObj.year
        }

        yearModel.queryAll(year_param, function (rows: Year[]) {
            if (rows.length>0) {
                res.send({exist:true});
            }else{
                yearModel.insert(yearObj, function (result) {
                    res.send(result);
                })
            }
        });
    })
    .put('/:id', function (req: Request, res) {
        setUserId(req,req.body);
        yearModel.update(req.body, {id: req.params.id}, function (result) {
            res.send(result);
        })
    })

export default yearRouter;