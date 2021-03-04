const letterPositions = function(sentence) {
  let results = {};
  let i = 0;
  for (let char of sentence) {
    if (char !== " ") results[char] ? (results[char].push(i)) : (results[char] = [i]);
    console.log(i);
    i++;
  }
  console.log(results);
  return results;
};