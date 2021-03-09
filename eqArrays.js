const eqArrays = (actual, expected) => {
  if (actual.length !== expected.length) return false;
  const actualSort = actual.sort();
  const expectSort = expected.sort();
  for (let elem of actual) if (actualSort[elem] != expectSort[elem]) return false;
  return true;
};
module.exports = eqArrays;