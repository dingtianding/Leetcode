/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var runningSum = function(nums) {
//     for (let i = 1; i < nums.length; ++i){
//         nums[i] += nums[i - 1];
//     }
    
//     return nums
    
// };

const runningSum = nums => {
    nums.reduce((a,c,i,arr) => arr[i] += a)
    return nums
}
