const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arrResult: [],

  getLength() {
    return this.arrResult.length;
  },
  addLink(value) {
    this.arrResult.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    console.log(typeof position);
    if (
      typeof position !== 'number' ||
      position > this.arrResult.length - 1 ||
      position <= 0
    ) {
      this.arrResult = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.arrResult.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arrResult.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    result = this.arrResult.join('~~');
    this.arrResult = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
