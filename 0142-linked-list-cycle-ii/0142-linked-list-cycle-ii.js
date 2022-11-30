/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let hash = new Set();
    while(head) {
        if(hash.has(head)) {
            return head;
        }
        hash.add(head);

        head = head.next;
    }
    return null
};

