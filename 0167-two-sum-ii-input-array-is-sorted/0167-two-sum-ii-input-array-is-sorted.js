/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// two sums. 1. Brute Force. 2. Hash 3. Two Pointer (2N)
// do sort the array then using two pointer
// 
// 1. p1 = 0, p2 =length -1
// 2. num1 + num2 = sum
// 3. sum vs target
// 4. target > sum, we want bigger number, move p1 to the right to access bigger number(sorted small to large)
// 4b. else move p2 in the opposite
// 4c target===sum, return[p1,p2]
// 4d p1 === p2, return @@@

// time of N
// space of 1 + 1 + 1 + 1 + 1
var twoSum = function(numbers, target) {
    let p1 = 0 // 2
    let p2 = numbers.length - 1// 15
    
    while(p1 < p2){// p2 > p1
        let num1  = numbers[p1]// 2
        let num2  = numbers[p2]// 7
        let sum = num1 + num2 // 9

        if(sum > target){ // 9>9
            p2--
        } else if(sum < target){
            p1++
        } else {
            return [p1 + 1,p2 + 1]
        }     
    }
    
};