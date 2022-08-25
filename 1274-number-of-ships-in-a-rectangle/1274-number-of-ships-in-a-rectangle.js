/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight
 *     @param {integer[]} bottomLeft
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 */
var countShips = function(sea, topRight, bottomLeft) {
    
    let numShips = 0; 
    
    const stack = [[topRight, bottomLeft]];
    
    while (stack.length > 0) {
        
        const [tR, bL] = stack.pop(); // get the dimensions
        
        if (!sea.hasShips(tR, bL)) continue; //check if sea has ship
        
        const [right, top] = tR; // top  4, right 2
        const [left, bottom] = bL; // bot  3, left 0
        
        if (right === left && bottom === top) {
            numShips++;
            continue;
        }
        const xCoord = Math.floor((right + left) / 2); // (4 + 0) / 2 = 2 the center X
        
        const yCoord = Math.floor((top + bottom) / 2); // (4 + 0) / 2 = 2 the center Y
        
        
        stack.push([tR, [xCoord + 1, yCoord + 1]]); // top right [4,4], [3,3]
        stack.push([[xCoord, top],[left, yCoord + 1]]); // top left [2,4], [0,3]
        stack.push([[xCoord, yCoord], bL]); // bottom left [2,2],[0 ,0]
        stack.push([[right, yCoord], [xCoord + 1, bottom]]); // bottom right[4,2],[3,0]
    }
    return numShips;
};