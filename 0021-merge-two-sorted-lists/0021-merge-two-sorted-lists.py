# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# iterate through both list
# compare
# if one is smaller we append it to a dummy head
# if one of the list reach null, we append the rest of the other list
#
# N
# 1
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        head = ListNode()
        tail = head
        cur1 = list1
        cur2 = list2
        
        while cur1 and cur2:
            if cur1.val < cur2.val:
                tail.next = cur1
                tail = tail.next
                cur1 = cur1.next
            else:
                tail.next = cur2
                tail = tail.next
                cur2 = cur2.next
        
        if cur1:
            tail.next = cur1
        else:
            tail.next = cur2
            
        return head.next
        