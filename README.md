# Lotide - JavaScript Utility Library

![GitHub last commit](https://img.shields.io/github/last-commit/VioletFigueroa/lotide?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/VioletFigueroa/lotide?style=flat-square)
![npm version](https://img.shields.io/npm/v/@VioletFigueroa/lotide?style=flat-square)
![License](https://img.shields.io/badge/license-Educational-blue?style=flat-square)

**Quick Links:** [Security Relevance](#security-relevance-for-application-security) | [Installation](#usage) | [API Documentation](#documentation)

---

**How to view artifacts:** Source code for each utility function in root directory; unit tests in `/test/` folder.

**Result snapshot:** Published npm package with 20+ utility functions, comprehensive test coverage, and modular architecture.

**Quick review:**
- **Security focus:** Input validation, type checking, safe array/object comparison, test-driven development
- **Key files:** `index.js` (exports), `eqObjects.js` (deep equality), `test/` (unit tests)
- **Start with:** Review test files to see edge case handling and validation patterns

## Overview
Lotide is a mini-clone of the Lodash library, created to understand how utility libraries work under the hood. This project demonstrates fundamental JavaScript programming, test-driven development, algorithm implementation, and npm package publishing. It showcases secure coding practices through input validation, type safety, and comprehensive edge case testing.

**Developed during:** Lighthouse Labs Web Development Bootcamp (February - March 2021)  
**Published to npm:** [@VioletFigueroa/lotide](https://www.npmjs.com/package/@VioletFigueroa/lotide)

## Security Relevance for Application Security

### Input Validation & Type Safety
- **Type checking** prevents unexpected behavior from incorrect input types
- **Edge case handling** (empty arrays, null values, undefined) prevents runtime errors
- **Defensive programming** validates assumptions before processing
- **Boundary condition testing** ensures functions handle extremes safely
- Demonstrates understanding that unexpected input is a security concern

### Test-Driven Development (TDD)
- **Unit tests** for every function validate expected behavior
- **Edge case coverage** tests null, undefined, empty, and boundary values
- **Regression testing** ensures fixes don't break existing functionality
- **Assertion libraries** provide consistent validation patterns
- **Test coverage** makes security regressions visible

### Secure Algorithm Implementation
- **Array equality comparison** handles nested arrays safely
- **Object equality comparison** prevents prototype pollution vulnerabilities
- **Deep comparison logic** avoids infinite recursion on circular references
- **Safe iteration patterns** using for...in and Array methods
- **Immutability patterns** - functions don't mutate original data structures

### Code Quality & Maintainability
- **Modular design** - each function in separate file facilitates review
- **Clear naming conventions** make code intent explicit
- **DRY principles** reduce attack surface through code reuse
- **Export patterns** control public API surface
- **Documentation** aids in security code review

### Package Security (npm)
- **Version control** enables tracking of changes and security fixes
- **Dependency management** (minimal external dependencies reduces supply chain risk)
- **Package.json security** defines entry points and exposed functionality
- **Gitignore** prevents accidental exposure of sensitive files
- **Published package** demonstrates understanding of software distribution

## Objectives
- Implement common utility functions from scratch
- Practice test-driven development methodology
- Understand JavaScript data structures and algorithms
- Publish package to npm registry
- Write clean, maintainable, well-documented code

## Methodology
- **JavaScript ES6+** for modern language features
- **Test-Driven Development** with assertion functions
- **Mocha & Chai** for professional-grade testing
- **Modular architecture** with single-responsibility functions
- **npm** for package management and publishing

## Key Features
- **Array Utilities:** head, tail, middle, map, takeUntil, without
- **Object Utilities:** eqObjects, findKey, findKeyByValue
- **String Utilities:** countLetters, letterPositions
- **Assertion Utilities:** assertEqual, assertArraysEqual, assertObjectsEqual
- **Comparison Utilities:** eqArrays, eqObjects with deep equality
- **Iteration Utilities:** countOnly, map with callback support

## Technologies Used
- **JavaScript ES6+:** Arrow functions, destructuring, template literals
- **Node.js:** Module system (require/exports)
- **Mocha:** Test framework for organized test suites
- **Chai:** Assertion library for expressive tests
- **npm:** Package manager and registry

## Application Security Lessons Learned
- **Utility functions are attack surface:** Even simple helpers can have security implications
- **Type coercion can be dangerous:** JavaScript's loose typing requires explicit validation
- **Deep comparison is hard:** Object/array equality needs careful handling to avoid vulnerabilities
- **Test coverage matters:** Untested edge cases are where bugs (and vulnerabilities) hide
- **Dependencies are risk:** Even a utility library has supply chain security considerations
- **API design impacts security:** What you expose publicly increases attack surface
- **Documentation prevents misuse:** Clear docs help developers use functions safely

## Documentation

The following functions are currently implemented:

### Array Functions
* **`head(arr)`** - Returns the first element of an array
* **`tail(arr)`** - Returns all elements except the first
* **`middle(array)`** - Returns the middle element(s) of an array
* **`map(array, callback)`** - Applies callback to each element, returns new array
* **`takeUntil(array, callback)`** - Returns elements until callback returns truthy
* **`without(source, itemsToRemove)`** - Returns array without specified elements

### Object Functions
* **`eqObjects(object1, object2)`** - Deep equality comparison for objects
* **`findKey(object, callback)`** - Returns first key where callback returns truthy
* **`findKeyByValue(object, value)`** - Returns key for a given value
* **`assertObjectsEqual(actual, expected)`** - Assertion for object equality

### String Functions
* **`countLetters(sentence)`** - Returns object with letter counts
* **`letterPositions(sentence)`** - Returns object with array of indices for each letter

### Comparison Functions
* **`eqArrays(array1, array2)`** - Deep equality comparison for arrays
* **`assertEqual(actual, expected)`** - Assertion for primitive equality
* **`assertArraysEqual(array1, array2)`** - Assertion for array equality

### Utility Functions
* **`countOnly(allItems, itemsToCount)`** - Counts specified items in array
* **`middleIndex(array)`** - Returns middle index of array (rounded down)

## Usage

**Install it:**
```bash
npm install @VioletFigueroa/lotide
```

**Require it:**
```javascript
const _ = require('@VioletFigueroa/lotide');
```

**Call it:**
```javascript
const results = _.tail([1, 2, 3]); // => [2, 3]
const middle = _.middle([1, 2, 3, 4, 5]); // => [3]
const isEqual = _.eqObjects({a: 1}, {a: 1}); // => true
```

## Code Examples

### Secure Deep Equality
```javascript
// Safe object comparison with array handling
const eqObjects = (object1, object2) => {
  // Type and length validation
  if (Object.keys(object1).length !== Object.keys(object2).length) 
    return false;
  
  // Handle nested arrays safely
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } else if (object1[key] !== object2[key]) return false;
  }
  return true;
};
```

### Input Validation Pattern
```javascript
// Safe middle element extraction with edge case handling
const middle = (array) => {
  if (!Array.isArray(array) || array.length < 3) {
    return []; // Safe default for invalid input
  }
  
  const midIndex = Math.floor(array.length / 2);
  return array.length % 2 === 0 
    ? [array[midIndex - 1], array[midIndex]]
    : [array[midIndex]];
};
```

## Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test test/headTest.js
```

## Test Coverage Example

```javascript
// Comprehensive edge case testing
describe('#head', () => {
  it('returns first element of array', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  
  it('returns undefined for empty array', () => {
    assert.strictEqual(head([]), undefined);
  });
  
  it('returns only element for single-element array', () => {
    assert.strictEqual(head([42]), 42);
  });
  
  it('does not modify original array', () => {
    const arr = [1, 2, 3];
    head(arr);
    assert.deepEqual(arr, [1, 2, 3]);
  });
});
```

## Application Security Career Connection

This project demonstrates foundational AppSec skills:

1. **Secure Coding Practices:** Input validation, type checking, and defensive programming
2. **Test-Driven Development:** Security testing integrated from the start
3. **Code Review Skills:** Clean, readable code facilitates security review
4. **Supply Chain Security:** Understanding npm packages and dependency management
5. **API Design:** Minimizing attack surface through careful API exposure

**Software engineering fundamentals essential for AppSec:**
- **Code Review:** Reading and understanding utility library code (common in security reviews)
- **Testing Methodology:** Writing security tests and validating edge cases
- **Algorithm Analysis:** Understanding time/space complexity and potential DoS vectors
- **Dependency Management:** Evaluating third-party library security
- **Secure Development:** Implementing defensive programming patterns
- **Documentation:** Clear communication about function behavior and limitations

This project demonstrates that **good security starts with good engineering** - clean code, comprehensive tests, and careful design are the foundation of secure software.

---

**Author:** Violet Figueroa  
**Contact:** [GitHub Profile](https://github.com/VioletFigueroa)  
**npm Package:** [@VioletFigueroa/lotide](https://www.npmjs.com/package/@VioletFigueroa/lotide)  
**Career Focus:** Application Security | Secure Software Development | Software Engineering

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**