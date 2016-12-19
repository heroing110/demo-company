/**
 * Created by heroing110 on 2016-12-10.
 */
import {createConnection} from "mysql";

let connection;
function connect() {
    if (!connection) {
        connection = createConnection('mysql://root:@localhost/cms');
        connection.connect();
    }
}

export function query(sql: string, params: any, callback: (rows, fields)=>any) {
    connect();
    connection.query(sql, params, function (err, data: any, fields: any[]) {
        if (err) throw err;
        callback(data, fields);
    });
}



