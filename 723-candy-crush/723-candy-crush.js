/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    if (!board) return board;
    
    
    let isDone = true;
    
    // mark rows. same row and col changes
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length - 2; col++) { // set to -2, as we are checking three of the same
            let num1 = Math.abs(board[row][col]); // go from left to right, check n1 2 and 3
            let num2 = Math.abs(board[row][col + 1]);
            let num3 = Math.abs(board[row][col + 2]);
            
            if (num1 === num2 && num2 === num3 && num1 !== 0) {
                board[row][col] = -num1; //mark it by set it to negative
                board[row][col + 1] = -num2;
                board[row][col + 2] = -num3;
                isDone = false;
            }
        }
    }
    //mark cols, same col, row i changes
    for (let col = 0; col < board[0].length; col++) {
        for (let row = 0; row < board.length - 2; row++) {
            let num1 = Math.abs(board[row][col]);
            let num2 = Math.abs(board[row + 1][col]);
            let num3 = Math.abs(board[row + 2][col]);
            
            if (num1 === num2 && num2 === num3 && num1 !== 0) {
                board[row][col] = -num1;
                board[row + 1][col] = -num2;
                board[row + 2][col] = -num3;
                isDone = false;
                // Same logic but checking the columns 
            }
        }
    }
    
    //drop
    if (!isDone) {
        for (let col = 0; col < board[0].length; col++) {
            let idx = board.length - 1;  // got top down
            for (let row = board.length - 1; row >= 0; row--) {
                if (board[row][col] > 0) {  // if there is a unmarked number 
                    board[idx][col] = board[row][col]; // set up the idx current idx as that number 
                    idx--; // then move up one
                    //this crushes because row changes as it go throught that column
                    //but the idx of where you are suppose to fill the unmarked number is only decrease(move upward)  if you make an assignment
                }
            }
            for (let row = idx; row >= 0; row--) {
                board[row][col] = 0; // start at idx and set to 0 for any cell that is above idx.(idx decrease which it moves toward the top)
            }
        }
    }

    if (isDone) return board
    else return candyCrush(board);
};