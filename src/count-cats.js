const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let matrixToArray = matrix.flat(Infinity);
    let sum = matrixToArray.reduce((acc, el, i) => {
        if(el === '^^'){
            acc += 1
        }
        return acc
        }, 0);
    return sum
}

module.exports = {
  countCats
};
