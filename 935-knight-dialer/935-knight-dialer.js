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
        
    let prevDP = new Array(10).fill(1); // [1,1,1,1...]
    
    for (let k = 2; k <= moves; k++) {
        const newDP = new Array(10).fill(0); // [0,0,0...]
        
        for (let currKey = 0; currKey <= 9; currKey++) {
            
            for (const nextKey of nextKeys[currKey]) { // this is possible jump(for 0, its gon be 4 and 6)
                newDP[currKey] = (newDP[currKey] + prevDP[nextKey]) % mode;
                // create a newDP in the current key we are by getting current values of newDP adding the prev ones
                // newDP[currKey] = old amount  starts at 0
                // prevDP[nextkey] = +1 at 4 then +1 at 6
                // first loop through all the Keys from 0 to 9
                // set the newDP as Old
                // then repeat for number of time as "moves"
            }
        }
        
        prevDP = newDP;
    }
    
    let total = 0;
    for (const count of prevDP) {
        total = (total + count) % mode; // go through all of the count in prevDP and get a sum
    }
        console.log(prevDP)

    return total;
};