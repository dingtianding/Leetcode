/**
 * @param {number[]} nums
 * @return {number}
 */
// bsearch
// [1,2,3,4,5] target = 4
//      l m r  
// find min num
// [3,4,5,0,1,1.5, 2] 
//      l,m,r         
// 
// [4,5,6,7,0,1,2] 
//        lm,r    
// if r > m, m is the smaller number
// if l > m, still want search the rest of the number
//     exit condition for while(l<r) l = r
//.    when m is the same as l or r, I just return the smaller one of the two.
// [11,13,15,17] 
//  l  r             
//  l < m < r
// num @ I or R 

// time of log N
// space of 1
var findMin = function(nums) {
    let l = 0
    let r = nums.length - 1
    
    while(l < r){
        let mid = Math.floor(l / 2 + r / 2)
        
        if(mid === l || mid === r) return Math.min(nums[l],nums[r])
        
        if(nums[mid] > nums[r]){
            l = mid
        } else if(nums[mid] > nums[l]){
            r = mid
        } else { //mid is smaller to both l + r number
            r = mid
        }
    }
    return nums[l]
};