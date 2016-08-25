var http = require("http");
var AV = require('leanengine');
var PORT = parseInt(process.env.LEANCLOUD_APP_PORT || 3000);

AV.init({
	appId: process.env.LEANCLOUD_APP_ID,
	appKey: process.env.LEANCLOUD_APP_KEY,
	masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
});

// 如果不希望使用 masterKey 权限，可以将下面一行删除
AV.Cloud.useMasterKey();

http.createServer(function(req, res) {
	res.writeHead("content-type", "text/plain");
	res.write("hello world");
	res.end();
}).listen(PORT);
