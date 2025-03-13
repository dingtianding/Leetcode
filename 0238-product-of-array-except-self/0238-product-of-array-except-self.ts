// 2 pass approach = 2N
// 1st pass = product of prefix(numbers in front) relative to each index position
//
// 2nd pass = product of suffix(numbers behind) relative to each index positiojn
// [1,2,3,4]
// preffix[1,1,2,6]
// suffix[24,12,4,1]
// iterate using i 
// [24,12,8,6]
// 2N 
// N

function productExceptSelf(nums: number[]): number[] {
    let result = []
    let product = 1

    for(let i = 0; i < nums.length; i++){ //2
        result.push(product) // append [1,1,2]
        product*=nums[i] // 1*2*3 = 6// [1,1,2,6]
    }
    product = 1
    for(let i = nums.length - 1; i >= 0; i--){
        result[i] *= product
        product *= nums[i]
    }
    return result

    
};