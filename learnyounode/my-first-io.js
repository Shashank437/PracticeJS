const fs = require('fs');

var data = fs.readFileSync(process.argv[2]);
const str = data.toString();
const lines = str.split('\n');
console.log(lines.length - 1);