/**
 * @param {number[][]} grid
 * @return {number[]}
 */
// M * N
var findBall = function(grid) {
    const rows = grid.length, cols = grid[0].length
    
    
    const getCol = function(row, col){// row 0, col 1
        if(grid[row][col] === 1){//if cell is right facing
            if(col === cols-1 || grid[row][col+1]=== -1) return -1;
            return col+1 // //row 0, col2
        }
        else if (grid[row][col] === -1) {// b3
            if(col === 0 || grid[row][col-1]=== 1) return -1;
            return col-1
        } 
    } 
    let result = []
    
    for(let col = 0; col< cols; col++){// ball
        let pos = col; // ball ending pos = [0,1,2,3,4]
        for(let row = 0; row < rows; row++){//row 0,1
            pos = getCol(row, pos);//use DFS to find the final position
            if(pos === -1)
                break
        }
        result.push(pos)
    }
    return result
};