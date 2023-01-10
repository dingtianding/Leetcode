/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function oddEvenList(head) {
  if (!head) return head;

  let odd = head;
  let even = head.next;
  while (odd.next && odd.next.next) {
    var temp = odd.next; // set 2 as temp
    odd.next = odd.next.next; //make the current's next pointer to the nextnext(Num3)
    odd = odd.next; // move odd to the next node
    temp.next = odd.next; //
  }
  odd.next = even; 
  return head;
}