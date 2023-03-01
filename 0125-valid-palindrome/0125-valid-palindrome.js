/**
 * @param {string} s
 * @return {boolean}
 */


// string 
// 1. convert upcase to lowcase 
// 2. remove all non-alphanumeric
// 3. removes space

// helper method get my string to convert 
// main check if it is palindrome

// T 2*N
// S N
// abcba
var isPalindrome = function(s) {
    let converted = convert(s) // "amanaplanacanalpanama"
    if (!converted.length) return true
    
    p1 = 0
    p2 = converted.length - 1
    while(p1 < p2){
        if(p1===p2) return true
        
        let char1 = converted[p1]// c
        let char2 = converted[p2]// c
        
        if(char1===char2){
            p1++
            p2--
        } else{
            return false
        }
    }
    return true
    
};

var convert = function(s){
    let lowercase = s.toLowerCase()
    let converted = lowercase.replace(/[^0-9a-z]/gi, '')
    
    return converted
}

