const eqArrays = require('./eqArrays');
const assertArraysEqual = boolean => boolean ? (console.log(`✅✅✅ Assertion Passed: These arrays are equal!`)) : (console.log(`🛑🛑🛑 Assertion Failed: These arrays are not equal!`));
module.exports = assertArraysEqual;