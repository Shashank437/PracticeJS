var promise = Promise.resolve('SECRET VALUE');
var promise = Promise.reject(new Error('SECRET VALUE'));

promise.then(function (value) {
    console.log('TESTING')
});

promise.catch(function (err) {
    console.error(err.message);
});

console.log('MAIN PROGRAM')