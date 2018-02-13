function prime(number) {
  var number = 600851475143;
  var i = 2;
  while (i<number) {
    while (number%i === 0) {
      (function (newnumber) {
        number = newnumber;
      }) (number / i)
    }
    i++;
  }
  return i;
}
module.exports = prime;
