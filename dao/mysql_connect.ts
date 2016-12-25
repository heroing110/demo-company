/**
 * Created by heroing110 on 2016-12-10.
 */
import {createConnection} from "mysql";

let connection;

function handleDisconnect() {
    if (connection) {
        return;
    }

    connection = createConnection('mysql://root:@localhost/cms'); // Recreate the connection, since
    // the old one cannot be reused.
    connection.connect(function (err) {              // The server is either down
        if (err) {
            connection = null;
            // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    connection.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            connection = null;
            handleDisconnect();
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}


export function query(sql: string, params: any, callback: (rows, fields) => any) {
    handleDisconnect();
    console.info('sql : ', sql);
    connection.query(sql, params, function (err, data: any, fields: any[]) {
        if (err) {
            console.error(err)
        }
        callback(data || {}, fields);
    });
}



