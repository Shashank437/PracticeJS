module.exports = (str,marks = str.length) => {
  for(var i=0;i<marks;i++){
    str = str + "!"
  }
  return str
}
