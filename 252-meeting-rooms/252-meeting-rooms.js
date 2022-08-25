/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (!intervals || intervals.length == 1) return true;
    
    let sorted = [...intervals].sort((a, b)=> a[0] - b[0])
    
    for (let i = 0; i < sorted.length - 1; i++) {
        end = sorted[i][1] // end at 10
        startNext = sorted [i+1][0] // start 5 is bad
        overlap = end > startNext //its overlap if 1st end 10 and 2nd start at 2
        if(sorted[i][1] > sorted [i+1][0]) return false; //if the 
    }
    return true;   
    
};