const words = ["ground", "control", "to", "major", "tom"];
const map = (array, callback) => {
  const results = [];
  for (let item of array)results.push(callback(item));
  return results;
}
console.log(map(words, (x => x + "🎶")));