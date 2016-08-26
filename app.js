'use strict';
var express = require('express');
var AV = require('leanengine');

var app = express();

// 设置模板引擎
app.use(AV.express());

app.get('/', function(req, res) {
  res.end("cc");
});

module.exports = app;
