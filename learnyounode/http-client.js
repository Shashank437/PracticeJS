var http = require('http');

http.get(process.argv[2],(response)=>{
    response.setEncoding('utf8')
    response.on('data',(data)=>{
        console.log(data)
    })
    response.on('err',(err)=>{
        console.log(err)
    })
}).on('err',(err)=>console.log(err))