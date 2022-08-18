// try {
//     doSomethingRisky();
//     doAnotherRiskyThing();
// } catch (e) {
//     console.log(e.message);
// }

//is same as

// doSomethingRisky()
//     .then(doAnotherRiskyThing)
//     .then(null, console.log);

function parsePromised(jsonObj){
    var myPromise = new Promise(function(fullfill,reject){
        try {
            fullfill(JSON.parse(jsonObj))
        } catch (error) {
            reject(error)
        }
    })

    return myPromise
}

function onReject(error){
    console.log(error.message)
}

parsePromised(process.argv[2]).then(function(value){
    console.log(value)
},onReject)