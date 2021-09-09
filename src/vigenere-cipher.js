import { NotImplementedError } from "../extensions/index.js";

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
export default class VigenereCipheringMachine {
  directMachine = false;
  alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  tabulaRecta = [];

  constructor(param) {
    if (arguments.length == 0 || param) this.directMachine = true;

    //let's create tabula recta
    for (var i = 0; i < this.alphabet.length; i++) {
      var rowTabulaRecta = [];
      for (var j = 0; j < this.alphabet.length; j++)
        rowTabulaRecta.push(this.alphabet[(i + j) % this.alphabet.length]);
      this.tabulaRecta.push(rowTabulaRecta);
    }
  }

  encrypt(message, key) {
    if (arguments.length != 2 || message === undefined || key === undefined)
      throw new Error("Incorrect arguments!");

    var encryptMSG = "";
    var currKeySymb = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (var i = 0; i < message.length; i++) {
      var msgSymbCode = message[i].charCodeAt();
      if (msgSymbCode >= 65 && msgSymbCode <= 90) {
        var keySymbCode = key[currKeySymb].charCodeAt();
        encryptMSG += this.tabulaRecta[msgSymbCode - 65][keySymbCode - 65];
        currKeySymb++;
        currKeySymb %= key.length;
      } else {
        encryptMSG += message[i];
      }
    }

    if (this.directMachine) return encryptMSG;
    else return encryptMSG.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (arguments.length != 2 || message === undefined || key === undefined)
      throw new Error("Incorrect arguments!");

    var decryptMSG = "";
    var currKeySymb = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (var i = 0; i < message.length; i++) {
      var msgSymbCode = message[i].charCodeAt();
      if (msgSymbCode >= 65 && msgSymbCode <= 90) {
        var keySymbCode = key[currKeySymb].charCodeAt();

        decryptMSG +=
          this.tabulaRecta[0][(26 - keySymbCode + msgSymbCode) % 26];
        currKeySymb++;
        currKeySymb %= key.length;
      } else {
        decryptMSG += message[i];
      }
    }

    if (this.directMachine) return decryptMSG;
    else return decryptMSG.split("").reverse().join("");
  }
}
