/**
 * @param {number[]} nums
 * @return {number}
 */

// 1. input = array in put that is only integer(+/-)]
// 2. input = subarray 1 or 1+
// 3. what = find a subarray where it has largest   ==>if statement
// 4. output= output to be that sum

// 1. current subarray = [4, -1, 2 ,100 ,-5 , 4] drop if this turn negative
// ex: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 2. max variable: to be return update if current sum sub of subarray > max  max = 6
// 3. sum  sub of subarray: currentSum
// 4. return max
// time of N space N + 2

// EX: nums = [-2,1,-3,  4,-1,2,1   ,-5,4]


var maxSubArray = function(nums) {
    if(nums.length === 1){
        return nums[0]
    }
    
    // let curSub = []
    let curSum = 0
    let max = -Infinity
    
    for (i = 0; i < nums.length; i++){
        let num = nums[i]
        // curSub.push(num) //[4, -1, 2, 1, -5, 4]
        curSum += num// sum = 5
        
        if(curSum > max){ // 5 > 6
            max = curSum // max = 6
        }
        
        if(curSum < 0){ 
            curSub = []         // logic 1 is drop curSub if the sum is less the 0 thus not contributing to later subway
            curSum = 0         // logic 2 is reset curSum when I drop 
        }
    }
    
    
    return max
};