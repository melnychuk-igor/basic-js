const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(num) {
  const ARR = String(num).split('');
  let firstNum;
  let secondNum;
  let maxNum = 0;

  for (let i = 0; i < ARR.length; ++i) {
    let arrTemp = ARR.slice();
    arrTemp.splice(i, 1);
    firstNum = arrTemp.join('');
    maxNum = Math.max(firstNum, maxNum)
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
