const assert = require('assert');
const sumOfOther = require('./sumOfOther');

describe('Check sum of other elements task', () => {
  it('1', () => {
    const sumOfOtherElems = sumOfOther([2, 3, 4, 1]);
    assert.equal(sumOfOtherElems.toString(), [8, 7, 6, 9].toString());
  });

  it('2', () => {
    const sumOfOtherElems = sumOfOther([5, 1, 0, 13, -1]);
    assert.equal(sumOfOtherElems.toString(), [13, 17, 18, 5, 19].toString());
  });

  it('3', () => {
    const sumOfOtherElems = sumOfOther([1, 1, 1, 1, 1, 1]);
    assert.equal(sumOfOtherElems.toString(), [5, 5, 5, 5, 5, 5].toString());
  });

  it('4', () => {
    const sumOfOtherElems = sumOfOther([0, 0, 0, 0, 0, 0, 0]);
    assert.equal(sumOfOtherElems.toString(), [0, 0, 0, 0, 0, 0, 0].toString());
  });
});
