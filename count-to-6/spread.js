var numbers = process.argv.splice(2)
var min = Math.min(...numbers)
console.log(`The minimum of [${numbers}] is ${min}`)