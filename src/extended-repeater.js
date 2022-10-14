const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let secondPart = '';
  let result = '';
  const OBJ = {
    repeatTimes: options.repeatTimes || 1,
    separator: options.separator || '+',
    addition: String(options.addition) || '',
    additionRepeatTimes: options.additionRepeatTimes || 1,
    additionSeparator: options.additionSeparator || '|',
  };

  if (OBJ.addition === 'undefined') {
    OBJ.addition = '';
  }
  
  for (let i = 0; i < OBJ.additionRepeatTimes - 1; i++) {
    secondPart += OBJ.addition + OBJ.additionSeparator;
  }
  
  secondPart += OBJ.addition;
  for (let i = 0; i < OBJ.repeatTimes - 1; i++) {
    result += str + secondPart + OBJ.separator;
  }

  return result + str + secondPart;
}

module.exports = {
  repeater,
};
