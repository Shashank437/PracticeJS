function repeat(operation, num) {
   if(num!=0){
    num--;
    repeat(operation,num)
   }
   return;
}

// Do not remove the line below
module.exports = repeat