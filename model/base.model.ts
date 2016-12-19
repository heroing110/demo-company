/**
 * Created by Administrator on 2016/12/12 0012.
 */
import {query} from "../dao/mysql_connect";
import {toSqlWhere, transformBody} from "../util/";

export abstract class DbModel<T> {
    abstract bean: string[];
    abstract name: string;

    constructor() {
    }

    insert(body: T, callback: (result: any)=>any) {
        const insertData = transformBody(body, this.bean);
        query(`INSERT INTO ${this.name} SET ?`, insertData, callback);
    }

    queryAll(params: any, callback: (rows: T[], fields: any[])=>any) {
        let sql = `select * from ${this.name}`;
        if (params) {
            sql += ` where ${toSqlWhere(params)}`;
        }
        query(sql, null, callback);
    }
}