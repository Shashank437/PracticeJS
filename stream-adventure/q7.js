const through = require('through2')
const stream = through(write, end)
var i=1

function write(buffer, encoding, next) {
    if(i%2==0)
    this.push(buffer.toString().toUpperCase())
    else this.push(buffer.toString().toLowerCase())
    i++
    next()
}

function end(done) {
    done()
} 

process.stdin.pipe(stream).pipe(process.stdout) 