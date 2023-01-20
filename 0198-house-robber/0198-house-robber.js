/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. max amount of money avalible  => 7-> 4
// 2. decrease the houses that I want to give up.
//   2a. small number  1 at idx of 0, 1, at idx of 3
//   2b. number next to really big number, 
// 
// [-1,-2,0,-2] = impact 
// least negative
// all possible comb
// 

// [1,2,3,1] 1 + 3 
// 1 = -2 + 1 = -1
// 3 = -2 - 1 + 3 = 0

// [1,2,3,1] 2 + 1
// 2 = -1 -3 + 2 = -2
// 1 = -3 + 1 = -2



// [2,7,9,3,1] 2+9+1 = 12
// 2 = -7 + 2 = -5
// 9 = -7 - 3 + 9 = -1
// 1 = -3 + 1 = -2
//-8

// [2,7,9,3,1] 7+3 = 10
// 7 = -2 - 9 + 7 = -4
// 3 = -9 - 1 + 3 = -7
//-11

//[100,1,1,100]
//memo[1] = impact
//memo[2] = #
 
var rob = function(nums, idx = 0, memo = {}) {
    if (idx in memo) {
        return memo[idx];
    }
    
    if (idx >= nums.length) {
        return 0;
    }
    
    const sumIfSkipped = rob(nums, idx + 1, memo);
    const sumIfRobbed = nums[idx] + rob(nums, idx + 2, memo);
    
    return memo[idx] = Math.max(sumIfSkipped, sumIfRobbed);
};