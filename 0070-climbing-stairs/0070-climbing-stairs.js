/**
 * @param {number} n
 * @return {number}
 */

// 8======D

//create an array that contains the step you are going to take
// total has to be = to the n
// we either reset/add ar change the array to find out all the possbility
// 1 : 1     [1]
// 2 : 2     1,1      2
// 3 : 3     1,1,1.    1,2.  2,1
// 4 : 5    1,1,1,1   1,1,2    1, 2, 1  , 2,1,1,  2,2
// 5 : 8     11111   1112    1121  1211 2111 221. 212 122 

// array of length of n, all 1
// array of length of n - 1, n - 2 worth 1, 1 count of 2
// n - 2, n - 4 c, 2 count of 2

// if its all two (or if the array of possible step is at 1/2 of the n), we can stop
//
//
//

var climbStairs = function(n, memo = {}) { // 3
    if (n in memo){
        return memo[n]
    }
    
    if(n === 1) {
        return 1
    }

    if(n === 2) {
        return 2        
    }
    
    let result = 0
    
    result = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)  // func(1) + func (2)
    memo[n] = result
    
    return result
    
};