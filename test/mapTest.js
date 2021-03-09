const map = require('../map');
const words = ["ground", "control", "to", "major", "tom"];
console.log(map(words, (x => x + "🎶")));