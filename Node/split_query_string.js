var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var qry = url.parse(req.url, true).query;
    var txt = qry.year + " " + qry.month;
    res.end(txt);
}).listen(8080);