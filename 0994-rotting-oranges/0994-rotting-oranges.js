/**
 * @param {number[][]} grid
 * @return {number}
 */
// input m*n 2d grid of cells
// cells can 0 = no orange, 1 = fresh orange, 2 = rotten
// courruption happens 4 direction adjadcent(dfs search helper function)
// minimum # of min(output is unit of min = integar)
// if there is a fresh orange, I want -1
// helper(grid, r, c)
// set all 4 direction fresh ornage to = 2
// increase 
var orangesRotting = function(grid) {
    let min = 0
    let done = false
    
    while(!done){
        done = true
        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                let rotTime = 2 + min// 2 + 1 = 3
                let pos = grid[r][c] //

                if(pos === rotTime){//right,down, left, up
                    
                    if(c + 1 < grid[0].length && grid[r][c+1]===1) {
                        grid[r][c+1] = rotTime + 1 // 4
                        done = false
                    }
                    if(r + 1 < grid.length && grid[r+1][c]===1) {
                        grid[r+1][c] = rotTime + 1
                        done = false
                    }
                    if(0 <= c - 1 && grid[r][c-1]===1) {
                        grid[r][c-1] = rotTime + 1
                        done = false
                    }
                    if(0 <= r - 1 && grid[r-1][c] ===1) {
                        grid[r-1][c] = rotTime + 1
                        done = false
                    }
                }
            }    
        }
        min++ //1
    }
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            if(grid[r][c]===1) return -1
        }
    }
    return min - 1
};


//[[2,1,1],
// [1,1,0],
// [0,1,1]] = -1
// setting them to number higher than 2(2+min)
// 3 = corupt at min1
// 4 = corrutp at min2
// when is stopping condition
// rotten orange adjcent to rotten(2+)
// fresh ornage adj to space(0)
// return min
// [[0,2]] = 0 already done
// run M(r) * N(c) * Min(# of min)