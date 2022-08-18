var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED')
    reject(new Error('I DID NOT FIRE'))
});

function onRejected(error) {
    console.log(error.message)
}

promise.then(
    function(data){ console.log(data)},onRejected)