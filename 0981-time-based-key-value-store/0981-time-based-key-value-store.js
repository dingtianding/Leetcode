//Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.
// object/hash
// 1 key = multiple 
// timestamp? = another value we store to keep track when it was store
// (definition of get function)get value of a key based on timestamp
// go to key(multiple), timestamp help us idenity which value are we return
//
// hash["foo"] = [["a", 1],["b", 2],["c", 3],["d", 4],["e", 5]] length 5.
// hash["foo"] = [["bar", 1],["bar2", 4]] length of 2
// init time 1 
// set time 1
// get time log N
var TimeMap = function() {
    this.hash = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(this.hash[key]){
        this.hash[key].push([value, timestamp])
    } else {
        this.hash[key] = [[value, timestamp]]
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.hash[key]) return ""
    
    let left = 0
    let right = this.hash[key].length - 1
    
    while(left < right){// 1 = 0
        let mid = Math.floor((left + right) / 2)
        let time = this.hash[key][mid][1]
        let value = this.hash[key][mid][0]
        
        if(timestamp > time){
           left = mid + 1
           } else if(timestamp < time){
            right = mid - 1
           } else if(timestamp === time){
               return value
           }
    }
    if(left < 0 || right < 0) return ""

    let value2 = this.hash[key][right][0]
    let time2 = this.hash[key][right][1]
    
    if(time2 > timestamp){
        return this.hash[key][right-1][0]
    } else {
        return value2
    }
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */