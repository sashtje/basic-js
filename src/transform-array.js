import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  var arrNew = [];
  var flagDiscNext = false;
  var flagDoubleNext = false;
  var itemWasDisc = false;

  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  for (var i = 0; i < arr.length; i++)
    if (arr[i] == "--discard-next") {
      flagDiscNext = true;
    } else if (arr[i] == "--discard-prev") {
      if (itemWasDisc) {
        itemWasDisc = false;
        continue;
      }
      if (arrNew.length > 0) arrNew.pop();
    } else if (arr[i] == "--double-next") {
      flagDoubleNext = true;
    } else if (arr[i] == "--double-prev") {
      if (itemWasDisc) {
        itemWasDisc = false;
        continue;
      }
      if (arrNew.length > 0) arrNew.push(arrNew[arrNew.length - 1]);
    } else {
      if (flagDiscNext) {
        flagDiscNext = false;
        itemWasDisc = true;
        continue;
      }
      if (flagDoubleNext) {
        flagDoubleNext = false;
        arrNew.push(arr[i], arr[i]);
      } else arrNew.push(arr[i]);
      itemWasDisc = false;
    }

  return arrNew;
}
