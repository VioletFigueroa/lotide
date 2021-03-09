# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @VioletFigueroa/lotide`

**Require it:**

`const _ = require('@VioletFigueroa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: Prints console logs reflecting if actualvalue is equal or inequal to the expected value;
* `assertArraysEqual(boolean)`: Prints console logs reflecting if value given is true or false;
* `assertObjectsEqual(actual, expected)`: Returns if the actual object is equal or inequal to the expected object;
* `eqObjects(object1, object2)`: Returns if given objects are equal or inequal
* `findKey(object, callback)`: Determines whethere a key that passes a callback function is present in a given object, and returns the key if so;
* `findKeyByValue(object,value)`: Determines whethere a key that contains a value given is present in a given object, and returns the key if so;
* `countLetters(sentence)`: Returns an object containing the chars in the sentence given as key values and the times they appear;
* `countOnly(allItems, itemsToCount)`: Given an array of strings and an object specifying keys count, returns an object containing the cound of those keys in the object;
* `head(arr)`: Returns the head (first element) of a given array;
* `letterPositions(sentence)`: Returns an object with the indexs of each char in a given sentence;
* `map(array, callback)`: Returns an array with a given callback applied to each element of a given array;
* `middle(array)`: Returns an array containing the middle index/indices' values from a given array;
* `middleIndex(array)`: Returns the middle index of a given array, rounded down if given an even amount of array elements;
* `tail(arr)`: Returns the tail (all elements besides the head element) of a given array;
* `takeUntil(array, callback)`: Returns an array of all the elements from a given array that fail the given callback; 
* `without(source, itemsToRemove)`: Returns an array that has had all elements that are present in another given array removed;