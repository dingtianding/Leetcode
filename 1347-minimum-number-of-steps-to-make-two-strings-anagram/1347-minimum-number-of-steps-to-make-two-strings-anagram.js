/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    
    let hash = {};
    
    for (let letter of s) {
        if(hash[letter]) hash[letter]++;
        else hash[letter] = 1
    }
    
    let changes = 0;
    for (let letter of t) {
        if (hash[letter]) hash[letter] --;
        else changes ++;
    }
    return changes
};