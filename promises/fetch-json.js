var qhttp = require('q-io/http')

var myPromise = qhttp.read("http://localhost:1337");

myPromise.then((value)=>{
    console.log(JSON.parse(value));
}).catch((err)=>console.log(err)).done()
