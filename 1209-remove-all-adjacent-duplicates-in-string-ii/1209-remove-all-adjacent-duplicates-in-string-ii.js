/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = []
    let chars = s.split('')
    for ( let i = 0; i < chars.length; i++) {
        if (i == 0 || chars[i] !== chars[i - 1]) {
            stack.push(1);
        } else {
            stack[stack.length - 1]++;
            
            if(stack[stack.length - 1] === k) {
                stack.pop();
                chars.splice(i - k + 1, k);
                i = i - k; // moves back K amount as we just removed K chars.
            }
        }
    }
    return chars.join('');
};