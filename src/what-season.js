const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date){
    return 'Unable to determine the time of year!'
  }

  let isFakeDate = (date) => {
    if (!(date instanceof Date) || Object.prototype.toString.call(date) !== '[object Date]') {
      return true;
    }
  
    try {
      date.getTime();
    } catch (e) {
      return true;
    }

    return false;
  }
 
  if(isFakeDate(date)){
    throw new Error("Invalid date!");
  }
  let season = '';
 
  const currentMonth = date.getMonth();
   
    switch(currentMonth){
        case 0:
        case 1:
        case 11:
            season = 'winter';
            break;
        case 2:
        case 3:
        case 4:
            season = 'spring';
            break;
        case 5:
        case 6:
        case 7:
            season = 'summer';
            break;
        case 8:
        case 9:
        case 10:
          season = 'fall';
          break;
        default:
          season = 'Unable to determine the time of year!';
            break;
    }
    return season;
  
 
    
}

module.exports = {
  getSeason
};
