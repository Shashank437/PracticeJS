const fs = require("fs");

fs.readFile(process.argv[2],(err,data)=>{
    if(err){
        return
    }
    const arr = data.toString().split('\n')
    console.log(arr.length - 1);
})
