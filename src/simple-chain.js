import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chain: "",
  length: 0,

  getLength() {
    return this.length;
  },

  addLink(value) {
    var newLink;
    if (arguments.length == 0) newLink = "( )";
    else if (value === undefined) newLink = "( undefined )";
    else if (value === null) newLink = "( null )";
    else if (Number.isNaN(value)) newLink = "( NaN )";
    else newLink = "( " + value + " )";
    if (this.length == 0) this.chain += newLink;
    else this.chain += "~~" + newLink;
    this.length++;

    return this;
  },

  removeLink(position) {
    if (
      Number.isInteger(position) &&
      position >= 1 &&
      position <= this.length
    ) {
      if (this.length == 1) {
        this.chain = "";
        this.length = 0;
      } else {
        var arr = this.chain.split("~~");
        arr = arr.slice(0, position - 1).concat(arr.slice(position));
        this.chain = arr.join("~~");
        this.length--;
      }

      return this;
    } else {
      //wrong position
      this.chain = "";
      this.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
  },

  reverseChain() {
    this.chain = this.chain.split("~~").reverse().join("~~");

    return this;
  },

  finishChain() {
    var result = this.chain;
    this.chain = "";
    this.length = 0;
    return result;
  },
};
