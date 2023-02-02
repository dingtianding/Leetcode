/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums, current = 0, memo = {}) {
    if(current in memo) return memo[current]
    if(current >= nums.length - 1) return true

    const maxSteps = nums[current]
        
    for(let i = 1; i <= maxSteps; i++){
        if(canJump(nums, current + i, memo)){ 
        memo[current] = true
        return true
        } 
    }
    memo[current] = false
    return false
};