const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const OBJ = {};

  domains.forEach(item => {
    const ARR = item.split('.').reverse();
    let str = '';
    
    ARR.forEach(item => {
      str = str + '.' + item;
      if(OBJ.hasOwnProperty(str)) {
        OBJ[str]++
      } else {
        OBJ[str] = 1
      }
    });
  });

  return OBJ;
}

module.exports = {
  getDNSStats
};
