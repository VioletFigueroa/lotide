const countLetters = sentence => {
  const results = {};
  for (const char of sentence)
    if (char !== " ")
      results[char] ? (results[char] += 1) : (results[char] = 1);
  console.log(results);
  return results;
};
module.exports = countLetters;