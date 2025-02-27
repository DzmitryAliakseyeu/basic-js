const { NotImplementedError } = require('../extensions/index.js');

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
function minesweeper(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let result = Array.from({ length: rows }, () => Array(cols).fill(0));

  let directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1], [1, 0], [1, 1]
  ]

  for(let i = 0; i < rows; i += 1) {
    for(let j = 0;  j < cols; j += 1) {
      if(matrix[i][j] === true) {
        for(let [dx, dy] of directions){
          let ni = i + dx;
          let ny = j + dy;
          if(ni >= 0 && ni < rows && ny >= 0 && ny < cols){
            result[ni][ny] += 1
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
