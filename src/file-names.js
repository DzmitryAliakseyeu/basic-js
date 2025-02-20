const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let arrCopy = [...names];
  let result = [];
  let count = 0;
  let tempObj = {};
    
  arrCopy.forEach((el,i) => {
      if(!Object.keys(tempObj).includes(el)){
        count = 0
        tempObj[el] = count;
      } else {
        count += 1;
        let newName = `${el}(${count})`
        tempObj[newName] = count;
      }
  });
  
  for(let el in tempObj){
    result.push(el)
  }

  return result;
}

module.exports = {
  renameFiles
};
