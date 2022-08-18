var arr = process.argv;
var sum=0;
for(var i = 0;i<arr.length-2;i++){
      sum = sum + (+arr[i+2]);
}
console.log(sum)