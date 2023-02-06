/**
 * @param {string} s
 * @return {string}
 */
// bdabad 
// a ,b = b, a
// figure out where the index is to slice
// let pointer1 = 0
// let pointer2 = 0
// let char1 = s[pointer1]
// let char2 = s[pointer2]
// if(char1 === char2 ) 
//  char1++ char2--
// if(char1!==char2){
//     let next1 = s[start+1]
//     let next2 = s[end-1]
//     if(char1===next2){ 
        
//     }
// }
//
var longestPalindrome = function(s) {
    let longest = ""
    
    for(let i = 0; i < s.length; i++){
        let cur1 = helper(s, i, i) 
        let cur2 = helper(s, i, i + 1)
        let longer = cur1.length > cur2.length ? cur1 : cur2
        
        if(longer.length > longest.length) longest = longer
        
    }
    return longest
};

var helper = function(s,i,j) {
    while(0 <= i && j < s.length && s[i]===s[j]){
        i--
        j++
    }
    return s.slice(i+1,j)
};