import { NotImplementedError } from "../extensions/index.js";

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  var numbers = [];
  var str = String(n);

  for (var i = 0; i < str.length; i++) {
    var currStr = str.slice(0, i) + str.slice(i + 1);
    numbers.push(Number(currStr));
  }

  numbers.sort((a, b) => {
    return b - a;
  });
  return numbers[0];
}
