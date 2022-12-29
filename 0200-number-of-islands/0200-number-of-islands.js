/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid == null || grid.length == 0) {
        return 0;
    }
    
    let height = grid.length
    let width = grid[0].length
    let num_islands = 0
    
    for(let r = 0; r < height; ++r){
        for(let c = 0; c < width; ++c) {
            if(grid[r][c]=="1"){
                ++num_islands;
                dfs(grid, r, c)
            }
        }
    }
    
    return num_islands;
};

var dfs= function(grid, r, c){
    let height = grid.length;
    let width = grid[0].length;
    
    if(r < 0 || c < 0 || r >= height || c >= width ||grid[r][c]=='0'){
        return
    }
    
    grid[r][c] = '0';
    dfs(grid, r - 1, c)
    dfs(grid, r + 1, c)
    dfs(grid, r, c - 1)
    dfs(grid, r, c + 1)

};