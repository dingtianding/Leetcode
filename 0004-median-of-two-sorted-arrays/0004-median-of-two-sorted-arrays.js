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
        let midX = (lo + hi) / 2 | 0, // mid of shorter length
            midY = (x + y + 1) / 2 - midX | 0; // mid of longer length
        
        let maxLeftX = midX === 0 ? -Infinity : nums1[midX - 1];  // left limit for shorter
        let minRightX = midX === x ? Infinity : nums1[midX];// right limit for shorter
        
        let maxLeftY = midY === 0 ? -Infinity : nums2[midY - 1]; // left limit for longer
        let minRightY = midY === y ? Infinity : nums2[midY]; // right limit for longer
        
        if(maxLeftX <= minRightY && maxLeftY <= minRightX) { // so as long as left limit of Xis less than right limit of Y && left limit is less than right limit of Y
            if((x + y) & 1) return Math.max(maxLeftX, maxLeftY);
            return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
        } else if(maxLeftX > minRightY) {
            hi = midX - 1;
        } else {
            lo = midX + 1;
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
