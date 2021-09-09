import { NotImplementedError } from "../extensions/index.js";

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  var arrUnique = [];
  var sum = 0;

  for (var i = 0; i < s1.length; i++)
    if (arrUnique.indexOf(s1[i]) == -1) arrUnique.push(s1[i]);

  for (var j = 0; j < arrUnique.length; j++) {
    var regExp = new RegExp(arrUnique[j], "g");
    var numberSymS1 = s1.match(regExp);
    var numberSymS2 = s2.match(regExp);

    if (!numberSymS1 || !numberSymS2) continue;
    else {
      numberSymS1 = numberSymS1.length;
      numberSymS2 = numberSymS2.length;
      sum += numberSymS1 >= numberSymS2 ? numberSymS2 : numberSymS1;
    }
  }

  return sum;
}
