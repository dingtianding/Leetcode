/**
 * @param {string} s
 * @return {number}
 */

// Input: s = "abcabcbb"
// pointer 1  = a index of 0
// pointer 2  = c index of 2
// return i2 - i1 + 1 = 3
// 
// pointer 1 = beiginning of the window 
// move if pointer is the best letter as pointer 2
// move pointer to pointer 
//
// set up a longest variable update if the current stirng is longer
// whnever pointer1 === p2 we update, whenever we reach the end of the string.
//
// pointer 2 = end of the window
// always moving 
//
// while loop point1 and p2 both within range of stirng
//
// return longest
// time of N 
// space of 1

var lengthOfLongestSubstring = function(s) {
    let hash = {}
    let p1 = 0 // left
    let p2 = 0 //right
    let longest = 0

    while(p2 < s.length){
        let c2 = s[p2] // a
        hash[c2] ? hash[c2]+=1 : hash[c2] = 1
        while(hash[c2] > 1){
            let c1 = s[p1] // a
            hash[c1] -= 1
            p1++ 
        }
    
        longest = Math.max(longest, p2 - p1 + 1)
        p2++
    } 
    return longest
    
};