/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) {
        return null;
    }
    
    let l1 = head;
    while (l1) {
        const l2 = new Node(l1.val);
        l2.next = l1.next;
        l1.next = l2;
        l1 = l2.next;
    }
    
    const newHead = head.next;
    
    l1 = head;
    while(l1) {
        if(l1.random){
            l1.next.random = l1.random.next;
        }
        l1 = l1.next.next
    }
    
    l1 = head;
    while(l1) {
        const l2 = l1.next;
        l1.next = l2.next
        if (l2.next) {
            l2.next = l2.next.next;
        }
        l1 = l1.next
    }
    
    return newHead
};