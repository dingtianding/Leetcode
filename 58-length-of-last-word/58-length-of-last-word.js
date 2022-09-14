/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    trimmed = s.trim();
    
    const words = trimmed.split(" ");
    
    return words[words.length - 1].length
    
};