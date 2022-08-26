/**
 * @param {character[][]} grid
 * @return {number}
 */




var numIslands = function(grid) {
    let count = 0
    
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            if(grid[row][col] == '1'){
                count ++
                explore(row, col, grid)
            }
        }
    }
    return count
};


function explore(row, col, grid){
    
    if(row < 0 || 
       col < 0 || 
       row >= grid.length || 
       col >= grid[row].length || 
       grid[row][col] === '0'||
       grid[row][col] === '2'){
        return 
    }
    // 0 = real water
    // 1 = 1st land
    // 2 = connected lands
    
    grid[row][col] = '2'
    // if 1 is next 1 it is part of the same island can be treated as 0(non-island)
    explore(row, col+1, grid) 
    explore(row, col-1, grid)
    explore(row+1, col, grid)
    explore(row-1, col, grid)
}
