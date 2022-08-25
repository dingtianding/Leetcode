/**
 * @param {number[][]} intervals
 * @return {number}
 */


//sort eearly to late
// start, end.
// if the range overlaps, increase count

var minMeetingRooms = function(intervals) {
    // if intervals == null || intervals.length == 0 return 0
    
    var start_times = intervals.concat().sort(function(a, b) {
        return a[0] - b[0];
    })
    
    var end_times = intervals.concat().sort(function(a, b) {
        return a[1] - b[1];
    })
    
    let count = 0
    let end = 0
    
    
    for (var i = 0; i < intervals.length; i++) {
        if (start_times[i][0] < end_times[end][1] ){ // 0 < 10 c++. 5 < 10 c++, 15 < 10 end ++
                //checking each of the start time with the end. If start time is before any of room ends, increase the room.
            count++;
        } else {
            end++;
        }
    }
        
    return count
};