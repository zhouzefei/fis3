var http=require('http');
var urls=require('url');
var path=require('path');
var server=http.createServer(function(req,res){
	var url=urls.parse(req.url).pathname;
	res.setHeader('Content-Type', 'application/javascript');
	if(url=='dynamic'){
		res.write('Hello world ');
	}
	res.end('The time is ' + Date.now());
})
server.listen(4444);