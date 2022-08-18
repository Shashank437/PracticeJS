function getShortMessages(messages) {
    var res = [];
    var arr = messages.filter((m) => m.message.length < 50)
    arr.forEach((a) => {
       res.push(a.message)
    })
    return res
}

module.exports = getShortMessages