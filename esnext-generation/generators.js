module.exports = function* generate(isEven) {
 
    var num;
    if(isEven){
        num=0;
    }else{
        num=-1;
    }

    while(true){
        num+=2;
        yield num;
    }

}