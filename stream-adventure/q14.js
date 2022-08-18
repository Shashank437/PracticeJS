const duplexer = require('duplexer2')
const through = require('through2').obj;  

module.exports = function (counter) {
    var counts = {};
    var readInput = through(write,end)
    return duplexer({objectMode:true},readInput,counter)

    function write(buffer, encoding, next) {
        counts[buffer.country] = (counts[buffer.country]||0) + 1;
        next()
    }
    
    function end(done) {
        counter.setCounts(counts);
        done()
    }
}

