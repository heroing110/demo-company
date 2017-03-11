const {join} = require("path");
const logger = require('morgan');
const {urlencoded, json} = require("body-parser");
const cookieSession = require('cookie-session');
const express = require("express");
const httpRequest = require('request-promise');
const host = 'http://192.168.31.239:8801';

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

// 静态文件处理
app.use(express.static(join(__dirname, 'dist')));

app.use(function (req, res, next) {
  const path = req.path;
  if (path.startsWith('/api')) {
    next();
  } else {
    res.sendfile('dist/index.html');
  }
});

app.use(function (req, res) {
  const path = req.path;

  // 不要缓存所有数据
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
  res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
  res.setHeader("Expires", "0"); // Proxies.

  if (path.includes('/destroyUser')) {
    console.log('****** call destroyUser');
    req.session.user = null;
    res.send({logout: true});
  } else if (path.includes('/getCurrentUser')) {
    console.log('****** call getCurrentUser');
    res.send({
      user: req.session.user
    });
  } else if (path.includes('/users/login')) {
    console.log('****** call /users/login');
    proxy(req, res, function (promise) {
      promise.then(result => {
        req.session.user = result.user;
      });
    });
  } else {
    proxy(req, res);
  }
});

function proxy(req, res, invoke) {
  let path = req.path;

  // 后台请求代理
  const promise = httpRequest({
    method: req.method,
    body: req.body,
    qs: req.query,
    uri: host + path,
    json: true
  });

  console.log('******  PROXY URI ****** : ', host + path);
  console.log('******  PROXY QUERY ****** : ', req.query);
  console.log('******  PROXY BODY ****** : ', req.body);
  console.log('******  PROXY METHOD ****** : ', req.method);

  invoke && invoke(promise);
  promise.then(result => {
    console.log('******  PROXY RESULT ****** : ', result);
    res.send(result);
  }, error => {
    res.send(error);
  });
}

const port = process.env.PORT || 4000;
app.set('port', port);

app.listen(port, function () {
  console.info('starting serve for http://localhost:' + port);
});
