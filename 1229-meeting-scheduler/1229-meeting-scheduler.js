/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function(slots1, slots2, duration) {
    const queue = new MinPriorityQueue ({compare:(a, b) => a[0] > b[0]});
    for (const slot of slots1)
        if(slot[1] - slot[0] >= duration) queue.enqueue(slot);
    
    for (const slot of slots2)
        if(slot[1] - slot[0] >= duration) queue.enqueue(slot);
    
    while(queue.size() > 1) {
        const slot1 = queue.dequeue();
        slot2 = queue.front();
        
        if(slot2[0] + duration <= slot1[1])
            return [slot2[0], slot2[0] + duration];
    }
    return [];
};