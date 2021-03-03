const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) return false;
  for (let i = 0; i < actual.length; i++) if (actual[i] !== expected[i]) return false;
  return true;
};
const assertArraysEqual = function(actual, expected) {
  let assert = true;
  if (actual.length !== expected.length) assert = false;
  for (let i = 0; i < actual.length; i++) if (actual[i] !== expected[i]) assert = false;
  assert
    ? console.log(`✅✅✅ Assertion Passed: These arrays are equal!`)
    : console.log(`🛑🛑🛑 Assertion Failed: These arrays are not equal!`);
};
const middle = function(array) {
  const middleIndex = (array) => Math.floor(array.length / 2);
  let output = [];
  if (array.length % 2 === 0) output.push(array[middleIndex(array) - 1]);
  if (array.length > 2) output.push(array[middleIndex(array)]);
  return output;
};
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);