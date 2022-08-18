module.exports = function generate(isEven) {
    var num;
    if (isEven) {
        num = 0;
    } else {
        num = -1;
    }

    var adv_iterator = {
        next: function (swap) {
            if(swap){
                num += 1
            }else{
                num +=2
            }
            return{
                value:num
            }
        }
    }

    return adv_iterator

}