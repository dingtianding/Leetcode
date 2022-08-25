/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    
    let maxCount = 0
    let curCount = 0;
    
    for (let i = 0; i < s.length; i++){
        if ( s[i] === '(' ){
            maxCount = Math.max(maxCount, ++curCount);
        } else if ( s[i] === ')' ){
            curCount--;
        }
    }
    return maxCount;
};