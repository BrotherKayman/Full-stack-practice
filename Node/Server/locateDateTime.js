var http = require('http');
var dateTime = require('./dateTimeModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Date and Time: ' + dateTime.myDateTime());
    res.end();
}).listen(8080);
