/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    start = 0
    midpoint = nums.length / 2
    
    shuffled = []
    
    while (start < nums.length / 2 && midpoint < nums.length) {
        shuffled.push(nums[start])
        shuffled.push(nums[midpoint])
        start++
        midpoint++
    }
    
    return shuffled
    
    
    
};