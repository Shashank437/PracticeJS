const express = require('express')
const fs = require('fs')
const app = express()

app.get('/books',function(req,res){
    fs.readFile(process.argv[3], function(err,data){
        if(err) res.sendStatus(500);
        try{
            var str = JSON.parse(data)
        }catch(err){
            res.sendStatus(500)
        }
        res.json(str)
    })
}).listen(process.argv[2])