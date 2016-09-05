var AV = require('leanengine');
var http = require("http");
var app = require("./app");

var APP_ID = process.env.LC_APP_ID;
var APP_KEY = process.env.LC_APP_KEY;
var MASTER_KEY = process.env.LC_APP_MASTER_KEY;
AV.initialize(APP_ID, APP_KEY, MASTER_KEY);
// 如果不希望使用 masterKey 权限，可以将下面一行删除
AV.Cloud.useMasterKey();

var PORT = parseInt(process.env.LEANCLOUD_APP_PORT || 3000);
app.listen(PORT);