/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//     let start = 0, end = nums.length - 1;
    
//        while(start < end){
//            var mid = start + Math.floor((end - start) / 2);
//            if(target < nums[mid]){
//                 end = mid; 
//            }else if(target > nums[mid]){
//                start = mid + 1;
//            } else {
//                return mid
//            }
//        }
//     return target <= nums[start] ? start : start + 1;

// };

function searchInsert(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};


function binarySearch(array, target, start, end) {
    if (start > end) return start;
    
    const midPoint = Math.floor((start + end)/2);
    
    if (array[midPoint] === target) return midPoint;
    
    if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
    if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}