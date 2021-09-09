import { NotImplementedError } from "../extensions/index.js";

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  var alreadyProcessed = [];
  var result = [];
  var length = names.length;

  for (var i = 0; i < length; i++) {
    var currItem = names.shift();
    if (
      alreadyProcessed.indexOf(currItem) == -1 &&
      result.indexOf(currItem) == -1
    ) {
      alreadyProcessed.push(currItem);
      result.push(currItem);
    } else if (alreadyProcessed.indexOf(currItem) != -1) {
      alreadyProcessed.push(currItem);
      var count = 0;
      alreadyProcessed.forEach((item) => {
        if (item == currItem) count++;
      });
      result.push(currItem + "(" + (count - 1) + ")");
    } else {
      alreadyProcessed.push(currItem);
      result.push(currItem + "(1)");
    }
  }

  return result;
}
