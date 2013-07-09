var express = require('express');
var fs = require('fs');
var buffer = new Buffer
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var text = fs.readFileSync('index.html')
  var string = buf.toString(text)
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
