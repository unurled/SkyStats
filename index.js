var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  if(req.url == "/"|| req.url == "/index.html"|| req.url == "/home") {
    fs.readFile('public/html/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
}).listen(8080); 