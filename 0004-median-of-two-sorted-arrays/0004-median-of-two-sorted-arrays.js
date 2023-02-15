/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
    
    const x = nums1.length, y = nums2.length;
    let lo = 0, hi = x;
    
    while(lo <= hi) {
        let partitionX = (lo + hi) / 2 | 0, // mid of shorter length
            partitionY = (x + y + 1) / 2 - partitionX | 0; // mid of longer length
        
        let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];  // left limit for shorter
        let minRightX = partitionX === x ? Infinity : nums1[partitionX];// right limit for shorter
        
        let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1]; // left limit for longer
        let minRightY = partitionY === y ? Infinity : nums2[partitionY]; // right limit for longer
        
        if(maxLeftX <= minRightY && maxLeftY <= minRightX) { // so as long as left limit of Xis less than right limit of Y && left limit is less than right limit of Y
            if((x + y) & 1) return Math.max(maxLeftX, maxLeftY);
            return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
        } else if(maxLeftX > minRightY) {
            hi = partitionX - 1;
        } else {
            lo = partitionX + 1;
        }
    }
};
// (1,500,1000) = 500
// (1,900,901,1000) = 900.5
// 
// (1,1,500,900,901,1000,1000) = 900
//
// mid is the median of each
// wat is a true median?
