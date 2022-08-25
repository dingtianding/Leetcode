/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for (row = 0; row < matrix.length; row++) {
        for(col = 0; col < matrix[0].length; col++){
            if( row > 0 && col > 0 && matrix[row - 1][col - 1] !== matrix[row][col]) return false;
        }
    }
    return true
};