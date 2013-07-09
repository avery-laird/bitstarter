var express = require('express');
var fs = require('fs');
var buffer = new Buffer(27);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var text = fs.readFileSync('index.html');
  var string = buffer.toString('utf-8', text)
  response.write(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
