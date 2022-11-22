module.exports = function check(str, bracketsConfig) { 
  let stack = [];
  let count = 0;
  let map = {
    ')': '(',
    ']': '[',
    '}': '{',
    '|': '|',
    '2': '2',
    '4': '3',
    '6': '5',
    '7': '7',
    '8': '8',
  };
  
  for (let i = 0; i < str.length; i++) {
      
      if(str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === '3' || str[i] === '5') {
        stack.push(str[i]);
        
      } else if(str[i] === '|' || str[i] === '2' || str[i] === '7' || str[i] === '8') {
        // stack.push(str[i]); 
        count++;
        
      } else if (stack[stack.length - 1] === map[str[i]]) {
        stack.pop();
      } else return false
  }
  console.log(count)
  return (stack.length || count % 2 !== 0) ? false: true;
  
}

