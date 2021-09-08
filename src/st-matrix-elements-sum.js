import { NotImplementedError } from "../extensions/index.js";

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  var sum = 0;
  var coefficientArr = [];

  for (var j = 0; j < matrix[0].length; j++)
    if (matrix[0][j] == 0) coefficientArr.push(0);
    else {
      sum += matrix[0][j];
      coefficientArr.push(1);
    }

  for (var i = 1; i < matrix.length; i++)
    for (var j = 0; j < matrix[0].length; j++) {
      sum += coefficientArr[j] * matrix[i][j];
      if (matrix[i][j] == 0) coefficientArr[j] = 0;
    }

  return sum;
}
