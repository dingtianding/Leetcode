/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let m = needle.length;
    let n = haystack.length;
    
    for(let i = 0; i <= n - m; i++){
        for(let j = 0; j < m; j++) {
            if(needle[j] != haystack[i + j]) {
                break;
            }
            if(j === m - 1){
                return i
            }
        }
    }
    return -1
};