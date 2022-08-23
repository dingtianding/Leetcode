/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const lastSeen = {}; 
    let longest = [0, 0]; // default longest substring index
    let startIdx = 0; // start of the longest substring index
        
    for(let i = 0; i < s.length; i++) {
        const char = s[i]
        if(char in lastSeen) {
            startIdx = Math.max(startIdx, lastSeen[char] + 1); // set startIdx to bigger of current vs the one after the current one since it is already in hash
        }
        if (longest[1] - longest[0] < i + 1 - startIdx) {
            longest = [startIdx, i + 1]; // if current i-startIdx(have to +1 to get length) is greater than longest stored. Update longest 
        }
        lastSeen[char] = i; //add char to hash
    }
    
    return longest[1]-longest[0] //return length
};