const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) return false;
  for (let elem of actual) if (actual[elem] !== expected[elem]) return false;
  return true;
};
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } else if (object1[key] !== object2[key]) return false;
  }
  return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}, ${inspect(expected)}`);
  return eqObjects(actual, expected);
};
