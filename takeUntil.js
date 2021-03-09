const takeUntil = (array, callback) => {
  let output = [];
  for (let elem of array) {
    if (!callback(elem)) output.push(elem);
    else return output;
  }
};
module.exports = takeUntil;
