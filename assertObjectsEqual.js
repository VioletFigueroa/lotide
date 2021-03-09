const eqObjects = require('./eqObjects');
const assertObjectsEqual = (actual, expected) => eqObjects(actual, expected);
module.exports = assertObjectsEqual;