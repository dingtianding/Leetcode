/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    count = {}
    
    for (i = 0; i < s.length; i++){
        char = s.charAt(i);
        count[char] ? count[char] += 1 : count[char] = 1
    }
    
    for (i = 0; i < s.length; i++){
        if (count[s.charAt(i)] == 1)
            return i;
    }
    return -1;
};