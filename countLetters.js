const assertEqual = (actual, expected) =>
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
const countLetters = function(sentence) {
  const results = {};
  for (const char of sentence)
    if (char !== " ")
      results[char] ? (results[char] += 1) : (results[char] = 1);
  console.log(results);
  return results;
};
const assertObjectEqual = function(actual, expected) {
  let assert = true;
  for (const akey in actual) if (actual[akey] !== expected[akey]) assert = false;
  assert
    ? console.log(`✅✅✅ Assertion Passed: These Objects are equal!`)
    : console.log(`🛑🛑🛑 Assertion Failed: These Objects are not equal!`);
};
const testExpected = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
let testActual = countLetters("lighthouse in the house");
assertObjectEqual(testActual, testExpected);