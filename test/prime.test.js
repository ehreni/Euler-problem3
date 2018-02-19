const each = require('jest-each');

const isPrime  = require('../src/prime');

describe('.isPrime', () => {
  each([
	[600851475143, 6857],
	[49, 7],
]).test('Faktor prima terbesar dari', (a, expected) => {
  expect(isPrime(a)).toBe(expected);
});
});

