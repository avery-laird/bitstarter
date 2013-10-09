var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var text = fs.readFileSync('index.html');
  var buffer = new Buffer(text, 'utf8');
  var string = buffer.toString('utf8');
 
  response.send(string);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var http = require('http'),
    static = require('node-static');

var folder = new(static.Server)('./img');

http.createServer(function (req, res) {
    req.addListener('end', function () {
        folder.serve(req, res);
    });
}).listen(5000);
                           
