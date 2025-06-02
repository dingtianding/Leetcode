# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# left-most right-most left-most right-most
#
#
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        second = slow.next
        slow.next = None
        prev = slow.next
        while second:
            tmp = second.next # stanard reverse the list 1. variable for next
            second.next = prev # 2. next pointer to prev
            prev = second # 3. prev set up to current for next iteratation
            second = tmp #4. move on via variable from step 1

        first, second = head, prev
        while second:
            temp1, temp2 = first.next, second.next
            first.next = second #1, 4
            second.next = temp1 #1,4->3
            first, second = temp1, temp2 # first = 2,3


        

        