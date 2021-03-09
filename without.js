const without = (source, itemsToRemove) =>
  source.filter((element) => itemsToRemove.indexOf(element) === -1);
module.exports = without;