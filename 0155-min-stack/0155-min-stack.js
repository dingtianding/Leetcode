
class MinStack {
    constructor(){
        this.stack = []
        this.mins = []
    }
};
// [ -2,0,-3]  top looks here
// [ -2,-2,-3] get min looks here


// ["MinStack","push","push","push","top","pop","getMin","pop","getMin","pop","push","top","getMin","push","top","getMin","pop","getMin"]
// [        [],   [6],   [6],   [7],   [],   [],      [],   [],      [],   [],   [7],   [],      [],  [-8],   [],      [],   [],      []]
//                                      7.    7        6.    6.       6.    6.    7.     7.      7       
/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    
    let min = this.mins[this.mins.length - 1] // last min in the mins array
     
    if(val < min || this.mins.length === 0){
        this.mins.push(val)
    } else {
        this.mins.push(min)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.mins.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.mins[this.mins.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */