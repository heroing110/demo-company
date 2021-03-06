import {Router} from "express"
import {Request} from "express-serve-static-core";
import {seasonMessageModel} from "../model/season-message.model";
import {seasonReportModel} from "../model/season-report.model";
import {seasonChartModel} from "../model/season-chart.model";
import {Season} from "../entity/season";
import {Report} from "../entity/report";
import {setUserId} from "../util/index";
const router = Router();

router
    .get('/', function (req: Request, res) {
        setUserId(req,req.query);
        seasonMessageModel.queryAll(req.query, function (rows: Season[]) {
            res.send(rows);
        });
    })
    .get('/detail', function (req: Request, res) {
        setUserId(req,req.query);
        seasonMessageModel.queryAll(req.query, function (seasons: Season[]) {
            if (seasons.length > 0) {
                seasonReportModel.queryAll({id: seasons[0].report}, function (reports: Report[]) {
                    seasons[0].report = reports[0];
                    res.send(seasons);
                });
            } else {
                res.send(seasons);
            }
        });
    })
    .get('/chart', function (req, res) {
        setUserId(req,req.query);
        seasonChartModel.queryChart(req.query, function (rows) {
            res.send(rows);
        })
    })
    .post('/insert', function (req: Request, res) {
        setUserId(req,req.body);
        const season: Season = <Season>req.body;
        const report: Report = <Report>season['report'];

        const season_param = {
            year:season.year,
            season:season.season,
            userid:season.userid
        };

        seasonMessageModel.queryAll(season_param, function (rows: Season[]) {
            if(rows.length>0){
                res.send({exist:1});
            }else {
                seasonReportModel.insert(report, function (result) {
                    season['report'] = result['insertId'];
                    seasonMessageModel.insert(season, function (result) {
                        res.send(result);
                    });
                });
            }
        });
    })
    .put('/:id', function (req: Request, res) {
        setUserId(req,req.body);
        const season: Season = <Season>req.body;
        const report: Report = <Report>season['report'];

        season['report'] = report.id;

        seasonMessageModel.update(season, {id: season.id}, function (result) {
            seasonReportModel.update(report, {id: report.id}, function (result) {
                res.send(result);
            });
        });
    });

export default router;