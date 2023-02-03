/**
 * @param {number[]} digits
 * @return {number[]}
 */

// [9,9,9] => [1,0,0,0]
// 1.get last index
// 2. increment by one
// 3. iteration from the back and cascading from back to front.
// 4. if its 10 at index of 0, we want to unshift a 1
var plusOne = function(digits) {
    digits[digits.length - 1] += 1
    for(let i = digits.length - 1; i >= 0; i--){
        if(digits[i] === 10 && i !== 0) {
            digits[i] = 0
            digits[i - 1]  += 1
        } else if(digits[i] === 10 && i === 0){
            digits[i] = 0
            digits.unshift(1)
        }   
    }
    return digits
};