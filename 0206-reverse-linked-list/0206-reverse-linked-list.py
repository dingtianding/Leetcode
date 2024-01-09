# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# in case of node of 1
#1. store current 1 in a var- set aside 
#2. reverse the pointer = point current node's next pointer toward previous
#3. set previous as the current
#4. move on by setting the current as the var set
#
# variables:
# temp: set aside
# current: inititae at the head of the ll
# previous: None
# 
# Time N
# Space of 1
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        temp = None
        current = head
        previous = None
        
        while current:
            temp = current.next # 2
            current.next = previous #
            previous = current # 5
            current = temp # None
            
        return previous
        