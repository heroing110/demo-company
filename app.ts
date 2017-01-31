import {join} from "path";
import favicon = require('serve-favicon');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import {urlencoded, json} from "body-parser";
const cookieSession = require('cookie-session');
const express = require("express");
const httpRequest = require('request-promise');
const host = 'http://192.168.31.239';

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({extended: false}));

app.use(cookieSession({
    name: 'session',
    secret: 'key',
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(express.static(join(__dirname, 'dist')));
app.use(function (req, res, next) {
    if (req.path.startsWith('/api')) {
        next();
    } else {
        res.sendfile('dist/index.html');
    }
});

app.use(function (req, res) {
    // 后天请求代理
    httpRequest({
        method: req.method,
        body: req.body,
        qs: req.query,
        uri: host + req.path,
        json: true
    }).then(result => res.send(result), error => res.send(error));
});

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, function () {
    console.info('starting serve http://localhost:' + port);
});
