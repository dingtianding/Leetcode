/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(moves) {
    const mode = 1e9 + 7;
    const nextKeys = {
        0: [4, 6],
        1: [6, 8],
        2: [7, 9],
        3: [4, 8],
        4: [0, 3, 9],
        5: [],
        6: [0, 1, 7],
        7: [2, 6],
        8: [1, 3],
        9: [2, 4]
    };  
    
    let count = 0;
    
    let prevDP = new Array(10).fill(1); // [1,1,1,1...]
    
    for (let k = 2; k <= moves; k++) {
        const newDP = new Array(10).fill(0); // [0,0,0...]
        
        for (let currKey = 0; currKey <= 9; currKey++) {
            
            for (const nextKey of nextKeys[currKey]) {
                newDP[currKey] = (newDP[currKey] + prevDP[nextKey]) % mode;
            }
        }
        
        prevDP = newDP;
    }
    
    let ans = 0;
    
    for (const count of prevDP) {
        ans = (ans + count) % mode;
    }
    
    return ans;
};