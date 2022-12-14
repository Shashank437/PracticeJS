const fs = require("fs")
const path = require("path")

module.exports = function(dir,ext,callback){
    fs.readdir(dir,function(err,list){
        if(err){
            return callback(err,null);
        }
        list = list.filter((file) => path.extname(file)==('.'+ext))
        callback(null,list);
    })
}