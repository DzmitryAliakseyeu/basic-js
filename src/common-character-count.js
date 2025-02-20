const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Arr = s1.split('');
  let s2Arr = s2.split('');
  let count = 0;
  
  let maxArr = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i += 1){
      for(let j = 0; j < arr2.length; j += 1){
        if(arr1[i] === arr2[j]){
          count += 1;
          arr1.splice(i, 1);
          arr2.splice(j, 1);
          i = 0
        }
      }
    }
  }
  
  if(s1.length >= s2.length){
    maxArr(s1Arr, s2Arr)
  } else {
    maxArr(s2Arr, s1Arr)
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
