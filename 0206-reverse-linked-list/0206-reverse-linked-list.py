# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev, curr = None, head
        while curr:
            nxt = curr.next # save nxt variable for later 
            curr.next = prev # on current, set next pointer to prev
            prev = curr # prev set to curr for later
            curr = nxt # move on by assesing nxt
        return prev

