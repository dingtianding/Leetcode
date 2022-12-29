/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let color = image[sr][sc]
    if(color != newColor) dfs(image, sr, sc, color, newColor);
    return image
};

var dfs = function(image, sr, sc, color, newColor){
    if(image[sr][sc] === color){
        image[sr][sc] = newColor;
        if(sr >= 1) dfs(image, sr-1, sc, color, newColor);
        if(sc >= 1) dfs(image, sr, sc-1, color, newColor);
        if(sr+1 < image.length) dfs(image, sr+1, sc, color, newColor)
        if(sc+1 < image[0].length) dfs(image, sr, sc+1, color, newColor)
    }
};