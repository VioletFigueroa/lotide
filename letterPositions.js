const letterPositions = function(sentence) {
  let results = {};
  let i = 0;
  for (char of sentence) {
  if (char !== " ") results[char] ? (results[char].push(i)) : (results[char] = [i]);  
  console.log(i);
  i++;
  }
  console.log(results);
  return results;
};
const assertObjectEqual = function(actual, expected) {
  let assert = true;
  if((Object.keys(actual)).length !== (Object.keys(expected)).length) assert = false;
  for (const akey in actual) if (actual[akey] !== expected[akey]) assert = false;
  assert
    ? console.log(`✅✅✅ Assertion Passed: These Objects are equal!`)
    : console.log(`🛑🛑🛑 Assertion Failed: These Objects are not equal!`);
};
const testExpected = { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] };
let testActual = letterPositions("lighthouse in the house");
console.log(testExpected);
assertObjectEqual(testActual, testExpected);