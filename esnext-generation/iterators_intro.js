module.exports = function makeCounter(someObj) {
    let n = 0;
    let done = false;
    someObj.next = function () {
        if (n == 10) {
            done = true;
        }
        n++;
        return {
            value: n,
            done: done
        }
    }

}