const {join} = require("path");
const logger = require('morgan');
const {urlencoded, json} = require("body-parser");
const cookieSession = require('cookie-session');
const express = require("express");
const httpRequest = require('request-promise');
const host = 'http://192.168.31.239';

const app = express();

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({extended: false}));

app.use(cookieSession({
  name: 'session',
  secret: 'key',
  maxAge: 24 * 60 * 60 * 1000
}));

app.use(express.static(join(__dirname, 'dist')));

// 获取当前session用户
app.use('/api/currentUser', function (req, res) {
  res.send({
    user: req.session.user
  });
});

// 销毁当前session 用户
app.use('/api/destroyUser', function (req, res) {
  req.session.user = null;
  res.send({logout: true});
});

// 登陆接口
app.use('/api/users/login', function (req, res) {
  proxy(req, res, promise => {
    promise.then(result => {
      //将用户信息设置到session中
      req.session.user = result.user;
      return result;
    });
  });
});

app.use(function (req, res) {
  // 所有的 api 指向代理接口
  if (req.path.startsWith('/api')) {
    proxy(req, res);
  } else {
    res.sendfile('dist/index.html');
  }
});

function proxy(req, res, invoke) {
  // 后台请求代理
  const promise = httpRequest({
    method: req.method,
    body: req.body,
    qs: req.query,
    uri: host + req.path,
    json: true
  });
  invoke && invoke(promise);
  promise.then(result => res.send(result), error => res.send(error));
}

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 4000;
app.set('port', port);

app.listen(port, function () {
  console.info('starting serve http://localhost:' + port);
});
