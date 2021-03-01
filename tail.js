const assertEqual = (actual, expected) =>
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`)
    : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
const tail = (arr) => arr.length > 0 ? arr.slice(1) : [];
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);