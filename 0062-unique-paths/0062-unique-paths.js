/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
//     if(m===1 || n === 1) return 1;
    
//     return uniquePaths(m-1, n) +uniquePaths(m, n-1)
// };

// const uniquePaths = function(m, n, memo = {}) {
//      const key = m + ',' + n;
//      if (key in memo) return memo[key];
//      if (m === 1 || n === 1) return 1
//      if (m === 0 || n === 0) return 0;
     
//      memo[key] = uniquePaths(m-1, n, memo) + uniquePaths(m, n-1, memo);
//      return memo[key];
// };
var uniquePaths = function(m, n) {
    let count = Array(m)
    for(let i=0; i<m; i++)  count[i] = Array(n)
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(i == 0 || j == 0)    count[i][j] = 1
            else    count[i][j] = count[i][j-1] + count[i-1][j]
        }
    }
    return count[m-1][n-1]
};