/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = 0
    for(let i = 0; i<nums.length; i++) total += nums[i]
    
    let subtotal = 0
    for(let j = 0;  j < nums.length; j++) {
        if(subtotal === (total - subtotal - nums[j])) return j
        subtotal += nums[j]
    }
    return -1
};