/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var pos = 0;
    
    for (var i = 0; i < nums.length; i++){
        num = nums[i]
        
        if (num !== 0) { // current number is not 0
            nums[pos] = num// set up the found non-zero. number to the pointer, and then increase it
            pos++
        }
    }
    
    for (i = pos; i < nums.length; i++){
        nums[i] = 0;
    }
    
};