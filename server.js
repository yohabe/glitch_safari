const https = require('https');
const http = require('http');
const fs = require('fs');

const options = {};

http.createServer(options, function (req, res) {
  res.writeHead(200, {
    // disable bfcache
	  'Cache-Control': 'no-store, no-cache'
  });
  const a = fs.readFileSync(__dirname + '/a.html');
  res.end(a);

}).listen(process.env.PORT || 8080);

console.log("The server is listening to port 8080");
