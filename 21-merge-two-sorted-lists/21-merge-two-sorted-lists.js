/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    var dummyHead = { val: -1, next : null}
    
    let current = dummyHead
    
    while(l1 && l2) {
        if (l1.val > l2.val){
            current.next = l2;
            l2 = l2.next
        } else {
            current.next = l1;
            l1 = l1.next
        }
        current = current.next;
    }
    
    current.next = l1 || l2
    
    return dummyHead.next;
    
};