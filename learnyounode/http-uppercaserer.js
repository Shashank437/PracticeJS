const http = require('http');
const map = require('through2-map')

var server = http.createServer(function(request,response){
    var myreq = request.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    }))
    myreq.pipe(response);
}).listen(process.argv[2])