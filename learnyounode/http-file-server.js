var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var fileUrl = process.argv[3];

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': 'text/plain' })
    var stream = fs.createReadStream(fileUrl);
    stream.pipe(response);
}).listen(port)