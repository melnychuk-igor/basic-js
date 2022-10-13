const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length > 0 && arr[0] !== 'undefined') {
    const ARR_CHANGED = arr.slice();

    function repeatForEach() {
      ARR_CHANGED.forEach((item, i) => {
        if (item === '--discard-next') {
          if(ARR_CHANGED[i + 1] !== undefined && (ARR_CHANGED[i + 2] === '--double-prev' || ARR_CHANGED[i + 2] === '--discard-prev')) {
            ARR_CHANGED.splice(i, 3);
          } else if (ARR_CHANGED[i + 1] !== undefined) {
            ARR_CHANGED.splice(i, 2);
          } else {
            ARR_CHANGED.splice(i, 1);
          }
        } else if (item === '--discard-prev') {
          if (ARR_CHANGED[i - 1] !== undefined) {
            ARR_CHANGED.splice(i - 1, 2);
          } else {
            ARR_CHANGED.splice(i, 1);
          }
        } else if (item === '--double-next') {
          if (ARR_CHANGED[i + 1] !== undefined) {
            ARR_CHANGED.splice(i, 1, ARR_CHANGED[i + 1]);
          } else {
            ARR_CHANGED.splice(i, 1);
          }
        } else if (item === '--double-prev') {
          console.log(1);
          if (ARR_CHANGED[i - 1] !== undefined) {
            ARR_CHANGED.splice(i, 1, ARR_CHANGED[i - 1]);
          } else {
            ARR_CHANGED.splice(i, 1);
          }
        }
      });
    }

    repeatForEach();
    repeatForEach();

    return ARR_CHANGED;
  } else {
    return [];
  }

  // console.log(ARR_CHANGED);
}

module.exports = {
  transform,
};
