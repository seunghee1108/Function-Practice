function sachick(first, second, callback) {
  return callback(first, second)
}
const minus = sachick(3, 4, function(first, second){
  return first - second
})
console.log(minus);