var http = require("http");

http.createServer(function(req, res){
	res.writeHead('content-type', 'text/plain');
	res.write("test");
	res.end();
}).listen(3000);