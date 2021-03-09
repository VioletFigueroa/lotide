const letterPositions = sentence => {
  let results = {};
  let i = 0;
  for (let char of sentence) {
    if (char !== " ") results[char] ? (results[char].push(i)) : (results[char] = [i]);
    i++;
  }
  return results;
};
module.exports = letterPositions;