function all(prom1,prom2){
    var myPomise = new Promise(function(fulfill,reject){
        var counter = 0;
        var res = [];
        prom1.then((value)=>{
            counter++;
            if(counter==2){
                fulfill(res)
            }
            res.push(value)
        })
        prom2.then((value)=>{
            counter++;
            if(counter==2){
                fulfill(res)
            }
            res.push(value)
        })
    })

    return myPomise;
}

all(getPromise1(),getPromise2()).then((value)=>{
    console.log(value)
})