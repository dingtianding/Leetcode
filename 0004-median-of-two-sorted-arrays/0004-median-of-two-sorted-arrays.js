/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)
    let x = nums1.length // 2
    let y = nums2.length // 2
    let low = 0, high = x // 0 , 2
    while(low <= high) {// 1 2
        const midX = (high + low) >> 1 // 1.5
        const midY = ((x + y + 1) >> 1) - midX // 2.5 - 1.5 = 1 = 1
        
        const maxX = midX == 0 ? -Infinity : nums1[midX - 1] // 1
        const minX = midX == nums1.length ? Infinity : nums1[midX] // 2
        const maxY = midY == 0 ? -Infinity : nums2[midY - 1] // 3
        const minY = midY == nums2.length ? Infinity : nums2[midY] //4
        
        if(maxX <= minY && maxY <= minX) { // 1 < 4 and 3 < 2
            const lowMax = Math.max(maxX, maxY)
            if( (x + y) % 2 == 1)
                return lowMax
            return (lowMax + Math.min(minX, minY)) / 2
        } else if(maxX < minY) { // 1 < 4
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
