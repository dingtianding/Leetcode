/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// k = # of rank, most to least
// hash of counts = key of num, value of count
// let topCount = 3
// iterate through the hash finding the topCount
// topCount--
// repeat until result.length === k
// cover it in while while(result.length < k)
//
// 
var topKFrequent = function(nums, k) {
    let count = {}
    
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        count[num] ? count[num]++ : count[num] = 1
    }
    const numArray = Object.keys(count)
    const sorted = numArray.sort((a, b) => count[b] - count[a])
    return sorted.slice(0, k)


        
    
};
//nums = [1,2,3].keys sort based on hash. Check syntax of sort
//count=[3,2,1].values
// do slice on the nums to get most k frequently