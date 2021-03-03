const assertArraysEqual = function(arr, arr2) {
  let assert = true;
  if (arr.length !== arr2.length) assert = false;
  for (let i = 0; i < arr.length; i++) if (arr[i] !== arr2[i]) assert = false;
  assert
    ? console.log(`✅✅✅ Assertion Passed: These arrays are equal!`)
    : console.log(`🛑🛑🛑 Assertion Failed: These arrays are not equal!`);
};
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);