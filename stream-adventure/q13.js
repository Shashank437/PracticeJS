const { spawn } = require('child_process')
const duplexer = require('duplexer2')

module.exports = function (cmd, args) {
    var prs = spawn(cmd, args);
    return duplexer(prs.stdin, prs.stdout)
}