const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  const arr = str.split('');
  const arrResult = [];
  let letter = arr[0];
  let count = 0;

  arr.forEach((item, i) => {
    if (letter === item) {
      count++;

      if (i === arr.length - 1) {
        arrResult.push(count + letter);
      }
    } else {
      arrResult.push(count + letter);

      count = 1;
      letter = item;

      if (i === arr.length - 1) {
        arrResult.push(count + letter);
      }
    }
  });

  arrResult.forEach((item, i) => {
    if(item.slice(0, 1) === '1') {
      arrResult[i] = arrResult[i][1]
    }

  });

  return arrResult.join('')
}

module.exports = {
  encodeLine
};
