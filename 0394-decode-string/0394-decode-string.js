/**
 * @param {string} s
 * @return {string}
 */
const decodeString = s => {
  const stack = [];
    
  for (const char of s) {
    if (char !== "]") { stack.push(char); continue; }
    let cur = stack.pop();//remove alphabet
    let str = '';
      
    while (cur !== '[') {
      str = cur + str; // build
      cur = stack.pop();// remove the alpha
    }
      
    let num = '';
    cur = stack.pop();//remove number 
      
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;//build number
      cur = stack.pop();//remove the prev string as cur
    }

    stack.push(cur);//push prev
    stack.push(str.repeat(Number(num)));//push in new ones
  }
    
  return stack.join('');
};