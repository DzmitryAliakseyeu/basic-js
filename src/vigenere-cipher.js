const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(word, key) {
    if(!word || !key ){
      throw Error ('Incorrect arguments!');
    }
    word = word.toUpperCase();
    key = key.toUpperCase();
    let alph ="abcdefghijklmnopqrstuvwxyz".toUpperCase();
    let res = [];
    let ik = 0;
    for(let i = 0; i < word.length; i += 1){
      let currentLetter = word[i];
      if(!alph.includes(currentLetter)){
        res.push(currentLetter)
      } else {
        if(ik >= key.length){
          ik = 0;
        }
        let currentLetterInd = alph.indexOf(currentLetter)
        let ciphLetterInd = alph.indexOf(key[ik])
        res.push(alph[(currentLetterInd + ciphLetterInd) % 26])
        ik += 1
      }
    }

    return res.join('')
  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
