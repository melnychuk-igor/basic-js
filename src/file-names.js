const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let position = 1;
  const arrResult = [];

  // `(${position})`

  names.forEach((item, i) => {
    if(i !== 0) {
      if(arrResult.includes(item)) {
        if(arrResult.includes(item)) {
          if(arrResult.includes(item + `(${position})`)) {
            let pos = item.indexOf('1');
            ++position;
            console.log(pos);
            arrResult.push(item + `(${position})`)
          } else {
            position = 1;
            arrResult.push(item + `(${position})`)
          }
        }
      } else {
        arrResult.push(item)
      }
    } else {
      arrResult.push(item)
    }
  });
  // console.log(arrResult);
  return arrResult;
}

module.exports = {
  renameFiles
};
