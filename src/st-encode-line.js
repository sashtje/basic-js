import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  var resStr = "";
  var symbol = "";
  var symCount = 0;

  for (var i = 0; i < str.length; i++) {
    if (symbol == str[i]) symCount++;
    else if (symbol == "") {
      symbol = str[i];
      symCount++;
    } else {
      if (symCount > 1) resStr += symCount + symbol;
      else resStr += symbol;
      symbol = str[i];
      symCount = 1;
    }
  }
  if (symCount > 1) resStr += symCount + symbol;
  else resStr += symbol;

  return resStr;
}
