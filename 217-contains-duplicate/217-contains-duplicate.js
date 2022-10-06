/**
 * @param {number[]} nums
 * @return {boolean}
 */
// true if x(# of appearance) at least twice (2,3,4....) x >= 2 
// false is all unique
// 1. create hash 
// 2. iterate through array and store each array inside of the hash
// 3. create if it already exist in hash => return true
// 4. ^^^ if statement does not trigger and we iterate all numbe we just return false.
// ** assumption array always number 
var containsDuplicate = function(nums) {
    let hash = {}
    
    for(i = 0; i < nums.length; i++) {
        let num = nums[i]
        
        if(hash[num]){
           return true
           }
        hash[num]= true
    }
    return false
};