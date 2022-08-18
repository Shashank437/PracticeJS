var http = require('http')
var bl = require('bl')

var url = process.argv.slice(2);
var res = []

function printRes(res){
    for(var i=0;i<res.length;i++){
        console.log(res[i])
    }
}

function sendRequest(r_url,index){
    http.get(r_url,function(response){
        response.pipe(bl(function(err,data){
            if(err){
                return console.error(err)
            }
            res[index] = data.toString();
            if(index == url.length-1){
                printRes(res);
            }
        }))
    })
}

for(var i=0;i<url.length;i++){
    sendRequest(url[i],i)
}