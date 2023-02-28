/**
 * @param {number[]} nums
 * @return {number}
 */
//
// 0,3,7,2,5,8,4,6,0,1 0 -- 8 == 9
//           2 
//
//
// N + M
// logic
// start counter = 1
// hash[100] = 1
// hash[99] or [101] > 1
// if [99] or [101] is <2, i increase the counter
// then counter++ afterward
// 
// hash value that is greater than 1 is not countable
var longestConsecutive = function(nums) {
    let longest = 0
    let set = new Set(nums)
    
    for (let num of set){
        if(!set.has(num - 1)){
            let current = 1
            let currentNum = num
            
            while(set.has(currentNum + 1)){
                current++
                currentNum++
            }
            longest = Math.max(longest, current)
        }
    }
    return longest
};