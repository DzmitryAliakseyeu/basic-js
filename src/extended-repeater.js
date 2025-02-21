const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arr1 = [];
  let newStr;
  options.separator = options.separator || '+';
  options.repeatTimes = options.repeatTimes || 1;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.additionSeparator = options.additionSeparator || '|';

  let addition = options.hasOwnProperty('addition') ? String(options.addition) : '';

  if(('additionRepeatTimes' in options) && ('additionSeparator' in options)){
    let arr2 = [];
    for(let i = 0; i < options.additionRepeatTimes; i += 1){
      arr2.push(String(addition))
    }
    
    for(let i = 0; i < options.repeatTimes; i += 1){
      arr1.push(str + arr2.join(options.additionSeparator))
    }
    newStr = arr1.join(options.separator)
 } else {
    for(let i = 0; i < options.repeatTimes; i += 1){
      arr1.push(str);
    }
    newStr = arr1.join(options.separator)
  }
  return newStr
}

module.exports = {
  repeater
};
