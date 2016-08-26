var express = require('express');
var AV = require('leanengine');

var app = express();

app.use(AV.express());
app.listen(process.env.LEANCLOUD_APP_PORT, function(req, res){
	console.log(111);
});