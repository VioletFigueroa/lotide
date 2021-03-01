const assertEqual = (actual, expected) =>
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`)
    : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
const head = (arr) => arr.length > 0 ? arr[0] : undefined;
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");