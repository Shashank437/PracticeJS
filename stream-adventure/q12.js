const trumpet = require('trumpet')
const fs = require('fs')
const through = require('through2'); 

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase())
    next()
} 

const tr = trumpet();
const stream = tr.select('.loud').createStream();
stream.pipe(through(write)).pipe(stream) 

process.stdin.pipe(tr).pipe(process.stdout)