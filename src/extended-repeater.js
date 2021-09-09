import { NotImplementedError } from "../extensions/index.js";

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
export default function repeater(str, options) {
  var sepFullAdd = "";
  var sepForStr = "";
  var result = "";
  var separator = "+";
  var addition;
  var strWithNull;

  if (options.repeatTimes == 0) return result;

  if (options.addition !== undefined && options.additionRepeatTimes != 0) {
    if (options.addition === null) addition = "null";
    else addition = options.addition;
    if (
      options.additionRepeatTimes === undefined ||
      options.additionRepeatTimes == 1
    )
      sepFullAdd = addition;
    else {
      var additionSeparator = "|";
      var arr = [];
      if (options.additionSeparator != undefined)
        additionSeparator = options.additionSeparator;
      for (var i = 0; i < options.additionRepeatTimes; i++) arr.push(addition);
      sepFullAdd = arr.join(additionSeparator);
    }
  }

  if (options.separator !== undefined) separator = options.separator;
  sepForStr = sepFullAdd + separator;

  var resArr = [];
  if (str === null) strWithNull = "null";
  else strWithNull = str;
  if (options.repeatTimes === undefined) resArr.push(strWithNull);
  else {
    for (var i = 0; i < options.repeatTimes; i++) resArr.push(strWithNull);
  }
  return resArr.join(sepForStr) + sepFullAdd;
}
