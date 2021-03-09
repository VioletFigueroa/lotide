const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const head = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const middleIndex = require('./middleIndex');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  countLetters: countLetters,
  countOnly: countOnly,
  head: head,
  letterPositions: letterPositions,
  map: map,
  middle: middle,
  middleIndex: middleIndex,
  tail: tail,
  takeUntil: takeUntil,
  without: without
};