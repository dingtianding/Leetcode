# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        left = dummy
        right = head

        while n > 0 and right:
            right = right.next
            n -= 1
        # left on dummy
        # right on window end
        while right:
            left = left.next
            right = right.next
        #move window
        #if right is null:
        # left point is on the node before N
        # 1,2,3,4,5
        #       L  R   
        #window size of 2
        left.next = left.next.next
        #if right 

        return dummy.next
        