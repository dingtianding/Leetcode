/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)
    let x = nums1.length
    let y = nums2.length
    let low = 0, high = x
    while(low <= high) {
        const midX = (high + low) >> 1
        const midY = ((x + y + 1) >> 1) - midX
        
        const maxX = midX == 0 ? -Infinity : nums1[midX - 1]
        const maxY = midY == 0 ? -Infinity : nums2[midY - 1]
        
        const minX = midX == nums1.length ? Infinity : nums1[midX]
        const minY = midY == nums2.length ? Infinity : nums2[midY]
        
        if(maxX <= minY && maxY <= minX) {
            const lowMax = Math.max(maxX, maxY)
            if( (x + y) % 2 == 1)
                return lowMax
            return (lowMax + Math.min(minX, minY)) / 2
        } else if(maxX < minY) {
            low = midX + 1
        } else if(maxX > minY)
            high = midX - 1
    }
    
};
// (1,500,1000) = 500
// (1,900,901,1000) = 900.5
// 
// (1,1,500,900,901,1000,1000) = 900
//
// mid is the median of each
// wat is a true median?
