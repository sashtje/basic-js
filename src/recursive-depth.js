import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

function hasArr(arr) {
  for (var i = 0; i < arr.length; i++) if (Array.isArray(arr[i])) return true;

  return false;
}
export default class DepthCalculator {
  calculateDepth(arr) {
    if (!hasArr(arr)) return 1;

    return 1 + this.calculateDepth(arr.flat());
  }
}
