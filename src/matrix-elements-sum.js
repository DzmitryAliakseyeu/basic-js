const { NotImplementedError } = require('../extensions/index.js');

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
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let column = 0;
  let row = 0;
  let arrLen = matrix[0].length;
  while(column < arrLen && row < matrix.length){
    if(matrix[row][column] > 0){
      sum += matrix[row][column];
      if(row === matrix.length - 1){
        column += 1
        row = 0;
      } else {
        row += 1
      }
    } else {
      row = 0
      column += 1
    }
  }
  return sum
}

module.exports = {
  getMatrixElementsSum
};
