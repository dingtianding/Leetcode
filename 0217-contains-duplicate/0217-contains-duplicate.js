/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set(nums)

    console.log(set,set.size)
    return !(set.size===nums.length)
};