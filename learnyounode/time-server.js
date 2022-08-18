const net = require('net');

const server = net.createServer(function(socket){
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
month = pad(month);
var day = date.getDate();
day = pad(day);
var hour = date.getHours();
hour = pad(hour);
var minute = date.getMinutes();
minute = pad(minute);
var reqDate = year + "-" + month + "-" + day + " " + hour + ":" + minute +"\n";
socket.end(reqDate);
}).listen(process.argv[2]);

function pad(num){
    if(num<10){
        return '0' + num;
    }
    return num;
}