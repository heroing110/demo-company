/**
 * Created by Administrator on 2016/12/12 0012.
 */
import {query} from "../dao/mysql_connect";
import {toSqlWhere, transformBody} from "../util/";

export abstract class DbModel<T> {
    abstract bean: string[];
    abstract arrayBean: string[];
    abstract name: string;

    private splitKey = ',';

    constructor() {
    }

    insert(body: T, callback: (result: any) => any) {
        const insertData = transformBody(body, this.bean, this.arrayBean, this.splitKey);
        console.log('insertData',insertData);
        query(`INSERT INTO ${this.name} SET ?`, insertData, callback);
    }

    update(body: T,where:any, callback: (result: any) => any) {
        const updateData = transformBody(body, this.bean, this.arrayBean, this.splitKey);
        query(`UPDATE  ${this.name} SET ? WHERE ?`, [updateData, where], callback);
    }

    queryAll(params: any, callback: (rows: T[], fields: any[]) => any) {
        let sql = `select * from ${this.name}`;
        if (params && Object.keys(params).length) {
            sql += ` ${toSqlWhere(params)}`;
        }
        query(sql, null, (rows: T[], fields) => {
            if (this.arrayBean && this.arrayBean.length) {
                rows.forEach((entity: T) => {
                    this.arrayBean.forEach(columnName => {
                        entity[columnName] = (entity[columnName] || '').split(this.splitKey);
                    });
                });
            }
            callback(rows, fields);
        });
    }
}