module.exports = function check(str, bracketsConfig) { 
  let obj = Object.fromEntries(bracketsConfig);
  let result = [];
    
  const map = (object) => {
    let objectMap = {};
    for(let key in obj) {
      objectMap[object[key]] = key;
    } return objectMap;
    
  }
    
    function getBracket (item, object) {
      for(let key in object) {
        if (item == obj[key]) {
          return true;
        }
      }
    }

  let objReverse = map(obj) 

  for(let i = 0; i < str.length; i++) {

      if(getBracket(str[i], obj)) {
            if (objReverse[str[i]] !== result.pop() && objReverse[str[i]] !== obj[str[i]]) return false;  
      } else {
        result.push(str[i]);
    } 
  
  } return result.length > 0 ? false: true;

}
