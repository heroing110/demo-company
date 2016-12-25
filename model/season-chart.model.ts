/**
 * Created by Administrator on 2016/12/12 0012.
 */
import {query} from "../dao/mysql_connect";

class SeasonChartModel<T>{
    queryChart(params: any, callback: (rows: T[], fields: any[]) => any) {
        const sql = 'select * from season_message t1 LEFT JOIN season_report t2 on t1.report = t2.id';
        query(sql,params,function(rows,fields){
            callback(rows,fields)});
    }
}

export const seasonChartModel = new SeasonChartModel ();