/**
 * @param {number[]} nums
 * @return {number[]}
 */

// array = array of integer(whole)
// create and return answer
// answer = each num is prodcut of all the other numbers

// time of N and without using /
//     N + N = master product
//     iterate = 
// if there is 0, the array is 0

// Iterate through the array = 
//     let prefixproduct = 1 * 2 * 3
//     [1,2,3,4] = N
//     [1,1,1,1] = beginning array * 1
//     [1,1,1,1] = * 2
//     [1,1,2,1] = * 6
//     [1,1,2,6] 
//     repeat right to left
     
//     [1,1,2,6] = product of all the left
//     [24,12,4,1] = product of all the right
//     = [24,12,8,6] = answer
    

var productExceptSelf = function(nums) {
    const left = Array(nums.length).fill(1) //[1,1,1,1]
    const right = Array(nums.length).fill(1)// same as above
    let leftRun = 1
    let rightRun = 1
    
    for(let i = 0; i < nums.length; i++){ // 1,2,3,4
        left[i] = left[i] * leftRun // 1 * 6
        leftRun = leftRun * nums[i] // leftRun = 1 * 2 * 3 = 6 * 4 =24
        
    }
    for(let i = nums.length - 1; i >= 0; i--){ // 4 3 2 1
        right[i] = right[i] * rightRun // 1 * 24
        rightRun = rightRun * nums[i] // leftRun = 1 * 4 * 3 * 2 = 24
    }
    console.log(right)

    for(let i = 0; i < nums.length; i++){ // 1,2,3,4
        left[i] = left[i] * right[i]
    }    
    
    return left

    
    
};