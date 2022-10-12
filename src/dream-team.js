const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(arr) {
  let str = '';

  if (!(Array.isArray(arr))) {
    return false;
  }

  arr.forEach((item) => {
    if (typeof item === 'string') {
      let bool = true;

      for (const key of item) {
        if (key !== ' ' && bool === true) {
          str += key.toUpperCase();
          bool = false;
        }
      }
    }
  });

  str = str.split('').sort().join('');

  return str;
}

module.exports = {
  createDreamTeam,
};
