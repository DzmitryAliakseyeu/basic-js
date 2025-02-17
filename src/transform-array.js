const { NotImplementedError } = require('../extensions/index.js');

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
function transform(arr) {
  if (!(arr instanceof Array)){
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  let transformedArray = [...arr];
 
  
  let discardNext = (arrC, index) => {
    if(index === arrC.length - 1){
      arrC[index] = undefined;
    }
    if (index + 1 < arrC.length) {
      arrC[index] = undefined; 
      arrC[index + 1] = undefined; 
  }
  }
  
  let discardPrev = (arrC, index) => {
    if(index === 0){
      arrC[index] = undefined;
    }
    if (index - 1 >= 0 ) {
      arrC[index] = undefined; 
      arrC[index - 1] = undefined; 
    }
  }
  
   let doubleNext = (arrC, index) => {
   
    if (index + 1 < arrC.length) {
      arrC[index] = arrC[index + 1];
    }
     if(index === arrC.length - 1){
      arrC[index] = undefined;
    }
  }
  
   let doublePrev = (arrC, index) => {
    if (index - 1 >= 0) {
      arrC[index] = arrC[index - 1];
    } else {
      arrC[index] = undefined;
    }
  }

  let states = {
      '--discard-next': discardNext,
      '--discard-prev': discardPrev,
      '--double-next': doubleNext,
      '--double-prev': doublePrev
  }
  

  
  let iteractionArray = (array) => {
      console.log(array)
        let tempArr = array.slice();
       
    for (let i = 0; i < tempArr.length; i++) {
        console.log(tempArr)
      if (states[tempArr[i]]) {
        states[tempArr[i]](tempArr, i);
      }
    
    }
    return tempArr.filter(el => el !== undefined);
  }

 return  iteractionArray(transformedArray)
}

module.exports = {
  transform
};
