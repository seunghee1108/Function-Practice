function add(firstNumber, secondNumber) {
  if(typeof(firstNumber) === "number" && typeof(secondNumber) === "number") {
    return firstNumber + secondNumber;
  } else {
    console.log(firstNumber, "타입이 잘못 지정되었습니다.");
  }
}
module.exports = add;