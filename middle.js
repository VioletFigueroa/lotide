const middleIndex = require('./middleIndex');
const middle = array => {
  let output = [];
  if (array.length % 2 === 0) output.push(array[middleIndex(array) - 1]);
  if (array.length > 2) output.push(array[middleIndex(array)]);
  return output;
};
module.exports = middle;