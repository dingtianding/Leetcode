/**
 * @param {number} n
 * @return {number}
 */
// 1 => 1
// 2 => 2
// 11, 2
// 3 => 3
// 111, 12, 21
// 4 => 5
// 1111, 112, 121, 211, 22
// 5 => 8
// 11111, 1112, 1121, 1211, 2111, 212, 221, 122 
// 6 => 12
// 
var climbStairs = function(n) {
    let arr = [1, 2] 
    
    if(n === 1) return 1
    if(n === 2) return 2
    
    for(let x = 3; x <= n ; x++){ // [1,2,3,5,]
            let sum = arr[x - 2] + arr[x -3] 
            arr.push(sum)
    }
    
    return arr[n-1]
};