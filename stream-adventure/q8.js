const concat = require('concat-stream');

var modify = concat(function(buff) {
    var data =buff.toString();
    var str = data.split("").reverse().join("")
    console.log(str)
});

process.stdin.pipe(modify)