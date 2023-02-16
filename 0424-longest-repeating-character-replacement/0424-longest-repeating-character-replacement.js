/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// "ABAB" 2 times = "AAAA" or "BBBB" = 4char
// "AABABBA" 1 times = "AAAABBA" or AABBBBA" = 4 char

// Time Complexity :  O(n)
// Space Complexity : O(1)
var characterReplacement = function(s, k) {
    const map = {}
    let maxLen = 0
    let largestCount = 0
    let slow = 0
    
    for(let fast = 0; fast< s.length; fast++){
        const char1 = s[fast]
        map[char1] = map[char1] ? map[char1] += 1 : 1

        largestCount = Math.max(largestCount, map[char1])
        
        let window = fast - slow + 1
        
        if(window - largestCount > k){//if gap is greater than k
            map[s[slow]] -= 1
            slow += 1
            window = fast - slow + 1
        }
        
        maxLen = Math.max(maxLen, fast - slow + 1)
    }
    return maxLen
};