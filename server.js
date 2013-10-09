var http = require('http'),
    static = require('node-static');

var folder = new(static.Server)('./img');

http.createServer(function (req, res) {
    req.addListener('end', function () {
        folder.serve(req, res);
    });
}).listen(8080);
