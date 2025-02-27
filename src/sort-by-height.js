const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let heightsArrPos = arr.filter((el) => el !== -1)
  heightsArrPos.sort((a, b) => a - b);
  let pos = 0
  arr.forEach((el, i) => {
    if(el !== -1){
      arr.splice(i, 1, heightsArrPos[pos]);
      pos += 1;
    }
  })
  return arr;
}

module.exports = {
  sortByHeight
};
