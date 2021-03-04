const assertEqual = (actual, expected) =>
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
const countLetters = function(sentence) {
  const results = {};
  for (const char of sentence)
    if (char !== " ")
      results[char] ? (results[char] += 1) : (results[char] = 1);
  console.log(results);
  return results;
};
