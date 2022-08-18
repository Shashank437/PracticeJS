var qhttp = require('q-io/http')

var myPromise = qhttp.read("http://localhost:7000");

myPromise.then((value)=>{
    qhhtp.read("http://localhost:7001/"+value)
})
.then((value) => console.log(JSON.parse(value)))
.catch((err)=>console.log(err)).done()