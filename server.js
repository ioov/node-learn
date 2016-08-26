var http = require("http");

// 端口一定要从环境变量 `LEANCLOUD_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
var PORT = parseInt(process.env.LEANCLOUD_APP_PORT || 3000);

http.createServer(function(req, res) {
	res.writeHead("content-type", "text/plain");
	res.write(PORT);
	res.end(PORT);
}).listen(PORT);
