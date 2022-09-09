/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    output = 0
    
    for (let i = 0; i < operations.length; i++){
       if(operations[i].includes("+")) {
           output++;
       }else{
           output--;
       }
    }
    return output
    
};