/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let output =[[]]
    
    for (let curNum of nums){
        let subset = []
        for(let prevNum of output){
            subset.push([...prevNum, curNum])
        }
        output.push(...subset)
    }
    return output
};
