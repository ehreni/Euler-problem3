function isPrime (number){
  var i = 2;
  while (number != i) {
    if (number % i === 0) {
      number = number / i;
    } else {
      i++;
    }    
  }
  return i;
}
module.exports = isPrime;
