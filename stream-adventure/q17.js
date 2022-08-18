var tar = require('tar')
var crypto = require('crypto')
var zlib = require('zlib');
var through = require('through2');

const parser =  new tar.Parse()
parser.on('entry', function (e) {
    if(e.type!=='File')return;
    var h = crypto.createHash('md5',{encoding:'hex'});
    e.pipe(h).pipe(through(function(md5){
        console.log(md5+' '+e.path)
    }))
});


process.stdin.pipe(crypto.createDecipheriv(process.argv[2],process.argv[3],process.argv[4])).pipe(zlib.createGunzip).pipe(parser)
