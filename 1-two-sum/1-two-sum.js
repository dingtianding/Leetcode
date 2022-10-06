/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1. nums is array
// 2. target is integer
// 3. return index of the integar that adds to the target
// 
// 1. Brute Force n^2 i and j 
// 2. Hashmap n 
// 3. Sort Log N () two pointer approach
//   a. sort
//  b. two pointer one at end one at begin
// c. increase begin pointer's index if sum is too small
//   d. decrease end pointer's index is sum is too big

// var twoSum = function(nums, target) {
//     let nums2 = nums
//     let sorted = nums2.sort((a, b)=> a - b)
//     let startIdx = 0 
//     let endIdx = nums.length - 1
    
//     while(startIdx < endIdx) {
//         if(nums[startIdx] + nums[endIdx] < target) startIdx ++
//         else if(nums[startIdx] + nums[endIdx] > target) endIdx --
//         else return [startIdx, endIdx]
//     }
//     return []
// };

var twoSum = function(nums, target) {
	let hash = {};
	
	for(let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if(hash[target - n] !== undefined) {
			return [hash[target - n], i];
		}
		hash[n] = i;
	}
	return [];
}