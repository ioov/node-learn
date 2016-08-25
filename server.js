var http = require("http");
var PORT = parseInt(process.env.LEANCLOUD_APP_PORT || 3000);

http.createServer(function(req, res){
	res.writeHead("content-type", "text/plain");
	res.write("hello world");
	res.end();
}).listen(PORT);