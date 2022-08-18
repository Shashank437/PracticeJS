module.exports = function filterForNumbers(iterable) {
    var result = [];
    for (i of iterable) {
       if(typeof(i)=='number'){
        result.push(i)
       }
    }
    return result
}