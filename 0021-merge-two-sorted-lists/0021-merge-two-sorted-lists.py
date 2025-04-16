# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
#
# two pointer
# p1 on list1.val
# p2 on list2.val
# while p1 and p2 on valid number
# if val1 > val2:
# add val2 to new list
# list2 = list2.next
# else
# add val1 to new list
# next
# out of while
# if to see which one still have valid val:
# we add the val to new list until we run out
# return head of new list
# 
# M + N
# 1 or N 
# result array reutnr whole arry = 1
# linkedin return head of the linked = N

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        result = ListNode()
        tail = result
        p1  = list1
        p2  = list2
        
        while p1 and p2:
            if p1.val > p2.val:
                tail.next = p2
                p2 = p2.next
            else:
                tail.next = p1
                p1 = p1.next
            tail = tail.next

        if p1:
            tail.next = p1
        else:
            tail.next = p2

        return result.next

        