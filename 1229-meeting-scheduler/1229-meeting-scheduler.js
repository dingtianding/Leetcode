/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function(slots1, slots2, duration) {
    slots1.sort((a,b) => a[0] - b[0]);
    slots2.sort((a,b) => a[0] - b[0]);
    
    let i = 0; j = 0;
    
    while(i < slots1.length && j < slots2.length) {
        const [start1, end1] = slots1[i]
        const [start2, end2] = slots2[j]
        
        start = Math.max(start1, start2)
        end = Math.min(end1, end2)
        length = end - start;
        
        if(length >= duration) {
            return [start, start + duration]
        }
        
        if(end1 < end2) {
            i++;
        } else {
            j++
        }
    }

    return []
};