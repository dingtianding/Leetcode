/**
 * @param {number} n
 * @return {boolean}
 */
// 2
// 4 cycle
// 16
// 1 + 36 = 37
// 9 + 49 = 58
// 25 + 64 = 89
// 64 + 81 = 145
// 1 + 16 + 25 = 42
// 16 + 4 = 20
// 4 + 0 = 4
// Happy # ?
// Postive Integers 
// 1. the sum of the squares of its digts 
//    1. take the digits, square it and add it
// 2. after doing step 1, we want the result to equal to 1
//    2b. loop endless(perform step1) and it never include
// 3. if the number is 1 then we are happy
    
    // 19 , 1 and 9, 123, 1 and 2 and 3
    // 11 mod 10 = 1 
    // 21 mod 10 = 1
    // 235 mod 10 = 5 = single
    // Math.floor(235/10) = 23
    // 23 mod 10 = 3 = ten
    // Math.floor(23/10) = 2 
    // 2 mod 10 = 2 = hundred
var isHappy = function(n) {
    let hash = {}
    // M?(number of operations) * N(num digits) addition > squaring
    // 100 = 1
    // 10000000000000000000 = 1 
    // 2 = #
    while (n !== 1) {
        hash[n] = true //19
        digits = []
        temp = n // 19
        while (temp > 0) {
            digit = temp % 10 // 9 ,  1
            digits.unshift(digit) // [9], [1, 9]
            temp = Math.floor(temp/10)// [19/10 = 1], 0
        }//[1,9]
        
        sum = 0
        
        for(i=0; i< digits.length; i++){ // 1^2 + 9^2 = 82 
            sum += digits[i] * digits[i]
        }
        n = sum
        
        if(hash[n] === true) return false
    }
    return true
};