const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let newArr = [];
  let countArr =[];
  arr.forEach((el, i) => {
     if(countArr.length === 0){
        countArr.push(el)
     }
       
      if(countArr[0] === arr[i + 1]){
        countArr.push(el);
      } else {
        if (countArr.length > 1){
          newArr.push([countArr.length, countArr[0]]);
        } else {
          newArr.push([countArr[0]]);
        }
        countArr = [];
      }
  })

  return newArr.flat(Infinity).join('')
}

module.exports = {
  encodeLine
};
