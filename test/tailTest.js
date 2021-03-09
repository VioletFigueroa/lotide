const assert = require('chai').assert;
const tail = require('../tail');
describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]),[2, 3]);
  });
  it("returns ['5'] for ['5']", () => {
    assert.deepEqual(tail(['5']), ['5']); 
  });
  it("does not change the original array", () => {
    const input = [1,2,3]
    const output = tail(input);
    assert.deepEqual(input, [1,2,3]); 
  });
});