/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set(nums)
    console.log(set)
    return !(set.size===nums.length)
};