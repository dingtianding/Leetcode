/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// input a PAYRALISHIRING
// input int that how many rows we have
// out new string PAHNAPLSIIGYIR
//
//  1. create a 2d array with int amount of row. Column = s.length. Rest can be zero
//  2. interate thorugh S
//  3. for each of the char, we want to set it in the 2d array in a pattern.
//  4. two momvent: downward and upward
//. 4a. downward is where we increase the outer index/x til we reach int row
//  4b. upward is where decrease outerindex/x and increase inner of y til we reach outer index of 0, we want go back 4a.
//  5. iterate through 2array, build them into a new string, and we ignore any 0/null

let convert = function(s, numRows) {
    if (numRows == 1) {
        return s;
    }

    let n = s.length;
    let sections = Math.ceil(n / (2 * numRows - 2.0));
    let numCols = sections * (numRows - 1);

    let matrix = new Array(numRows).fill(0).map(() => new Array(numCols).fill(' '));
    
    let currRow = 0, currCol = 0;
    let currStringIndex = 0;

    // Iterate in zig-zag pattern on matrix and fill it with string characters.
    while (currStringIndex < n) {
        // Move down.
        while (currRow < numRows && currStringIndex < n) {
            matrix[currRow][currCol] = s[currStringIndex];
            currRow++;
            currStringIndex++;
        }

        currRow -= 2;
        currCol++;

        // Move up (with moving right also).
        while (currRow > 0 && currCol < numCols && currStringIndex < n) {
            matrix[currRow][currCol] = s[currStringIndex];
            currRow--;
            currCol++;
            currStringIndex++;
        }
    }

    let answer = matrix.map(row => row.join('')).join('');
    return answer.replaceAll(' ', '');
};