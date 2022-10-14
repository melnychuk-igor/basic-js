const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.type = type;
  }

  encrypt(message, key) {
    if (!(message && key)) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let pos = 0;

    message = message.split('');

    message.forEach((item, i) => {
      if (this.alphabet.includes(item)) {
        if (key[pos] === undefined) {
          pos = 0;
        }

        let sum = item.charCodeAt(0) - 65 + key[pos].charCodeAt(0) - 65;

        if (sum >= 26) {
          sum = sum % 26;
        }

        let result = String.fromCharCode(65 + sum);
        message[i] = result;
        ++pos;
      } else {
        message[i] = item;
      }
    });

    return this.type ? message.join('') : message.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!(encryptedMessage && key)) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.split('');
    let pos = 0;
    key = key.toUpperCase();

    encryptedMessage.forEach((item, i) => {
      if (this.alphabet.includes(item)) {
        if (key[pos] === undefined) {
          pos = 0;
        }

        let result = item.charCodeAt(0) - 65;
        result = result - (key[pos].charCodeAt(0) - 65);

        if (result < 0) {
          result += 26;
        }

        encryptedMessage[i] = String.fromCharCode(65 + result);
        ++pos;
      } else {
        encryptedMessage[i] = item;
      }
    });

    return this.type
      ? encryptedMessage.join('')
      : encryptedMessage.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
