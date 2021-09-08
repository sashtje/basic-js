import { NotImplementedError } from "../extensions/index.js";

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function isMineOrNot(matrix, i, j) {
  if (
    typeof matrix[i] == "undefined" ||
    typeof matrix[i][j] == "undefined" ||
    !matrix[i][j]
  )
    return 0;
  return 1;
}

export default function minesweeper(matrix) {
  var resArr = [];
  for (var i = 0; i < matrix.length; i++) {
    var currRow = [];
    var bombs = 0;
    for (var j = 0; j < matrix[i].length; j++) {
      bombs =
        isMineOrNot(matrix, i - 1, j - 1) +
        isMineOrNot(matrix, i - 1, j) +
        isMineOrNot(matrix, i - 1, j + 1) +
        isMineOrNot(matrix, i, j - 1) +
        isMineOrNot(matrix, i, j + 1) +
        isMineOrNot(matrix, i + 1, j - 1) +
        isMineOrNot(matrix, i + 1, j) +
        isMineOrNot(matrix, i + 1, j + 1);
      currRow.push(bombs);
    }
    resArr.push(currRow);
  }

  return resArr;
}
