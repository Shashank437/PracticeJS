module.exports = function* multiplier() {

    var num = 0;
    var it
    var second = 1;
    while (true) {
        num++;
        it = num * second;
        second = yield it;
        if (!second) {
            second = 1;
        }
    }

}