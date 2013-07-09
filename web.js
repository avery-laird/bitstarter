var express = require('express');
var fs = require('fs');
var buffer = new Buffer(27);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var text = fs.readFileSync('index.html');
  var string = buffer.write(text)
  var fstring = buffer.toString('utf-8')
  response.send(fstring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
