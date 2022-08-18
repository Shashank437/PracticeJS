var promise = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE')
});

promise.then(function (value) {
    console.log(value)
})

console.log('MAIN PROGRAM');