/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    
    let width = Math.sqrt(area) | 0
    
    while(area % width !== 0) {
        width --;
    }
    
    const length = area / width;
    
    return [length, width];
};