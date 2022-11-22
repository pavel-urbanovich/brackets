module.exports = function check(str, bracketsConfig) { 
  let stack = [];
  let count = 0;
  let map = {
    ')': '(',
    ']': '[',
    '}': '{',
    '|': '|',
    '2': '1',
    '4': '3',
    '6': '5',
    '7': '7',
    '8': '8',
  };
  
  for (let i = 0; i < str.length; i++) {
      
      if(str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === '3' || str[i] === '5' || str[i] === '1') {
        stack.push(str[i]);
        
      } else if(str[i] === '|' || str[i] === '7' || str[i] === '8') {
        count++
        if (count % 2 === 0) {
          stack.pop();
        } else {
          stack.push(str[i]);
          
        }
      } else if (stack[stack.length - 1] === map[str[i]]) {
        stack.pop();
      } else return false
  }
  return (stack.length || count % 2 !== 0) ? false: true;
}

