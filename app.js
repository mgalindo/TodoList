// Load the http module to create an http server.
var http = require('http'),
	fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (req, res) {
  
	fs.readFile('app/views/main.html', function(err, data) {
	  	res.writeHead(200, {"Content-Type": "text/html"});
  		res.end(data);

  		console.log(data)
	});
}).listen(3000);

