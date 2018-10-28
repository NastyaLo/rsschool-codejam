const assert = require('assert');
const sumOfOther = require('./sumOfOther');
const make = require('./make');

const sum = function sum(a, b) {
  return a + b;
};

const difference = function difference(a, b) {
  return a - b;
};

const multiplication = function multiplication(a, b) {
  return a * b;
};

const division = function division(a, b) {
  return a / b;
};

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

describe('Check with items storage', () => {
  it('1', () => {
    const makeSum = make(15)(34, 21, 666)(41)(sum);
    assert.equal(makeSum, 777);
  });

  it('2', () => {
    const makeDifference = make(5)(10)(13, 666)(1)(difference);
    assert.equal(makeDifference, -685);
  });

  it('3', () => {
    const makeMultiplication = make(1)(2)(3)(4)(5)(multiplication);
    assert.equal(makeMultiplication, 120);
  });

  it('4', () => {
    const makeDivision = make(120)(3)(2)(5)(division);
    assert.equal(makeDivision, 4);
  });
});
