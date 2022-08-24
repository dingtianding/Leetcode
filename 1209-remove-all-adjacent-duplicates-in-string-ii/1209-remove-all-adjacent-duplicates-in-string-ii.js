/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(string, k) {
    const char_stack = [];
    const count_stack = [];
    
    for (const char of string) {
        if(char !== char_stack[char_stack.length - 1]){
            char_stack.push(char);
            count_stack.push(1);
        }else{
            char_stack.push(char);
            count_stack[count_stack.length - 1] += 1;
        }
    
    
        if (count_stack[count_stack.length-1] === k){
            for(let i = 0; i < k; ++ i) {
                char_stack.pop();
            }
            count_stack.pop();
        }
    }
    return char_stack.join('');
};