/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// find out correct row by looking 1st and lst number
// once target is in range of that row, we do a normal bsearch
// M = row 
// N = col
// time log (N) + 0.5 * (M)
// time 1 or N
var searchMatrix = function(matrix, target) {
    let r = matrix.length // 1
    let c = matrix[0].length // 1
    let top = 0
    let bot = r - 1
    
    while(top <= bot){//   
        let row = Math.floor((top + bot) / 2);
        let first = matrix[row][0]
        let last = matrix[row][c-1]

        if(target < first){ //0 < 1
            bot = row - 1 ;
        } else if(target > last){ 
            top = row + 1  // 1
        } else { // 1 < 3 < 7
            break
        }
    }
    let row = Math.floor((top + bot) / 2)
    let left = 0 // 0
    let right = c - 1 // 0
    
    if(!(top <= bot)) {
        return false;
    }
    
    while(left <= right) { //  1 = 1
        let mid = Math.floor(( left / 2 ) + (right / 2)) //1 => 1 index
        let midNum = matrix[row][mid] // 3
        
        if(midNum < target){ // 1 < 2
            left = mid + 1 // l = 1
        } else if(midNum > target){ // 3 > 2
            right = mid - 1// r = 1
        } else if(target === midNum) { 
            return true
        }  
    }
    return false
};