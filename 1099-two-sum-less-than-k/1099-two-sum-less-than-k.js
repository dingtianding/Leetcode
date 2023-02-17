/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// nums = array of integer(0123)
// k = limit for my sum
// trying to find max sum < k
// i = num1 
// j = num2
// i < j not the same #
// num1 + num2 = sum
// biggest sum < k
// return -1 if not exist
//  34 + 24 = 58 < 60
//   0   3
// sort? do two pointer move pointer based on condition
// what happen if length of 1, return -1 for now

// 1. iterate N^2
// 2. two pointer N * log, space of 1
// let best if
// [1,23,24,30,34]
// pointer = 29
// p2 = 34
// sum = 63
// k = 60 while(p1<p2)
// 3. hash best N
// let best num = 23
// let best diff = 3
// hash[34]= 26
// hash[23]= 37
// hash[24]= 36

// [34,23,1,24,75,33,54,8]
// [1,8,23,24,30,34,54,75] 
//  1                2
//sum = 64
//k = 60
//max = 58
var twoSumLessThanK = function(nums, k) {
    let max = 0
    let p1 = 0
    let p2 = nums.length - 1
    const sorted = nums.sort((a, b) => a - b);;//small to big by default

    while(p1 < p2){
        let num1 = sorted[p1]
        let num2 = sorted[p2]
        let sum = num1 + num2
        
        if(sum < k) {
            if(sum > max) max = sum
            p1++
        } else {
            p2--
        }
    }
    return max === 0 ? -1 : max
};