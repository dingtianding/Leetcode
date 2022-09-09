/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {    
    shuffled = []
    
    for (i = 0; i < n; i++) {
        shuffled.push(nums[i])
        shuffled.push(nums[i+n])
    }
    
    return shuffled
    
    
    
};