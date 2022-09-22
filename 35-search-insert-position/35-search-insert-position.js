/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0, end = nums.length - 1;
    
       while(start < end){
           var mid = start + Math.floor((end - start) / 2);
           if(target < nums[mid]){
                end = mid; 
           }else if(target > nums[mid]){
               start = mid + 1;
           } else {
               return mid
           }
       }
    return target <= nums[start] ? start : start + 1;

};