function sachick(first, second, callback) {
  return callback(first, second)
}
const division = sachick(3, 4, function(first, second){
  return first / second
})
console.log(division);