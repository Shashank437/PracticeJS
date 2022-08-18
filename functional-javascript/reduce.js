function countWords(inputWords) {
    return inputWords.reduce((cnt, word) => {
        if (cnt[word]) {
            cnt[word] = cnt[word]+1;
        } else {
            cnt[word] = 1
        }
        return cnt;
    },{})
}

module.exports = countWords