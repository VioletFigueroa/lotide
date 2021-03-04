const assertArraysEqual = function(actual, expected) {
  let assert = true;
  if (actual.length !== expected.length) assert = false;
  for (let elem of actual) if (actual[elem] !== expected[elem]) assert = false;
  assert
    ? console.log(`✅✅✅ Assertion Passed: These arrays are equal!`)
    : console.log(`🛑🛑🛑 Assertion Failed: These arrays are not equal!`);
};
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);