# Euler-problem3
This source code solves the problem of :
The prime factors of 13195 are 5, 7, 13 and 29.  What is the largest prime factor of the number 600851475143 ?

### How to test and run the program
1. Install `jest` and `jest-each`

```
npm install --save-dev jest
npm install --save-dev jest-each
```

2. Add file `prime.test.js` in the test directory
```
st each = require('jest-each');

const isPrime  = require('../src/prime');

describe('.isPrime', () => {
  each([
        [600851475143, 6857],
        [49, 7],
]).test('Faktor prima terbesar dari', (a, expected) => {
  expect(isPrime(a)).toBe(expected);
});
});
``` 

3. Test the program
```
npm run test
```


