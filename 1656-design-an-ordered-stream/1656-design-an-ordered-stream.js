/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.pointer = 0;
    this.arr = new Array(n).fill(null);
    
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    index = idKey - 1
    this.arr[index] = value
    
    chunk = [];
    
    while(this.pointer < this.arr.length && this.arr[this.pointer]) {
        chunk.push(this.arr[this.pointer]);
        this.pointer++
    }
    
    return chunk
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

