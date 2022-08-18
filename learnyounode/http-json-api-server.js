const http = require('http');
const url = require('url')

var port = process.argv[2];

function format_Date(time){
    return{
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function format_Unix(time){
    return{
        unixtime:time.getTime()
    }
}

var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'application/json'});
    var reqUrl = url.parse(request.url,true);
    var path = reqUrl.pathname;
    var time = new Date(reqUrl.query.iso);
    var data;
    if(path == '/api/parsetime'){
       data = format_Date(time)
    }else if(path =='/api/unixtime'){
        data = format_Unix(time)
    }
    response.end(JSON.stringify(data));
}).listen(port);
