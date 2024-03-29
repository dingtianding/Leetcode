/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squared = nums.map(num => Math.pow(num, 2))
    return squared.sort((a,b) => a-b)
};