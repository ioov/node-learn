var http = require("http");

http.createServer(function(req, res){
	res.writeHead("content-type", "text/plain");
	res.write("hello world");
	res.end();
}).listen(process.env.LEANCLOUD_APP_PORT);