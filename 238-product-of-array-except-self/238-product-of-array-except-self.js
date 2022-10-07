/**
 * @param {number[]} nums
 * @return {number[]}
 */

// nums = array
// answer = array of same length
// each of answer(answer[i]) is gon be product of all nums except answer[i]
// dw about upperlimit
// must in time of n
// cann't use /

//[1,2] = [2,1]
//[1,2,3] =[6, 3, 2]
//[1,2,3,4] =[24,12,8,6]

//[24,12,8,6] * 5
//.push 

//[1,2,3,4,5]=[120,60,40,30,24]


//@@[1,2,3,4] = [24,12,8,6]

var productExceptSelf = function(nums) {
    let ans = []
    let product = 1
    
    for(i=0;i<nums.length;i++){
        let num = nums[i]
        
        ans.push(product) //[1]
        product = product * num// product 1
    } 
    //ans = [1,1,2,6] => [24, 12, 8, 6]
    //nums [1,2,3,4]
    // 1. 1
    // 2. 1st num * 1
    // 3. 1st num * 2nd
    // 4. product of 123
    
    let product2 = 1
    
    for(i = nums.length - 1; i >= 0; i--){ //4, 3, 2, 1 @ 6, 2, 1, 1
        let num2 = nums[i] // 4 * 6     (ans[ans/nums.length - 1])
        ans[i] = ans[i] * product2 //update answer [24,12,8,6]
        product2 = product2 * num2 // product = 24
        
    }
    return ans
    
};