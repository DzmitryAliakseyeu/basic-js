const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let teamName = [];
  let addLetter = (el) => {
    if (typeof el === 'string') {
      let copyEl = el.trim();
      if (copyEl) {
        let firstLetter = copyEl[0].toUpperCase();
        teamName.push(firstLetter);
      }
    }
  } 

  members.forEach((el) => {
      if (Array.isArray(el)){
       return
      } else {
        addLetter(el)
      }
  })
  return teamName.sort((a, b) => a.localeCompare(b, 'en')).join('');
}

module.exports = {
  createDreamTeam
};
