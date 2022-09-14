/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    
    let que = []
    
    for (let i = 1; i <= n; i++) {
        que.push(i)
    }
    
    while(que.length > 1) {
        let count = k - 1 
        
        while(count > 0){//shifting
            que.push(que.shift());
            count--
        }
        
        que.shift()
    }
    return que.shift()
};