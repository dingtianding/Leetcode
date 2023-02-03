/**
 * @param {character[][]} grid
 * @return {number}
 */

// explore helper function
// r,c passed into visted set
// if r,c in visted already
// check if its 1 or 0
// return false if water(0)
// create boundary so it doesn't go out of bound
var numIslands = function(grid) {
    let visited = new Set();
    let count = 0
    
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            if(explore(r,c,visited,grid)){
                count++
            }
        }
    }
    return count
};

var explore = function(r, c, visited, grid) {
    let pos = r + ',' + c  // 2 , 2
    let rowB = 0 <= r && r < grid.length
    let colB = 0 <= c && c < grid[0].length
    
    if(!rowB || !colB ) return false
    if(grid[r][c] == "0") return false
    if(visited.has(pos)){
        return false 
    } else {
        visited.add(pos) //visited ["r,c"]
    }
    
    explore(r + 1, c, visited, grid)
    explore(r, c - 1, visited, grid)
    explore(r - 1, c, visited, grid)
    explore(r, c + 1, visited, grid)
    
    return true
};
//
//[["1","1","0","0","0"],
// ["1","1","0","0","0"],
// ["0","0","1","0","0"],
// ["0","0","0","1","1"]]