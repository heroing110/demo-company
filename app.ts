import {join} from "path";
import favicon = require('serve-favicon');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import {urlencoded, json} from "body-parser";
const express = require("express");

import yearRouter from "./routes/year.router";
import seasonRouter from "./routes/season.router";

const app = express();

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({extended: false}));
app.use(cookieParser());

app.use('/app/year', yearRouter);
app.use('/app/season', seasonRouter);
app.use(express.static(join(__dirname, 'web/dist')));
app.use(function (req, res) {
    res.sendfile('web/dist/index.html');
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, function () {
    console.info('starting serve http://localhost:' + port);
});
