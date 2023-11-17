# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
#
# case 1 current value in between p and q = kind of found the right anc
# case 2 current value is less than both p and q = move the right to access greater values
# case 3 opposite 2 greater=> move left
#
# after moving and if the current value is equal to p or q, return the value is equal
# 
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        
        while root:
            if root.val < p.val and root.val > q.val: # 6 < 2, 6 > 8
                return root
            elif root.val > p.val and root.val < q.val:
                return root
            elif root.val < p.val and root.val < q.val:
                root = root.right
            elif root.val > p.val and root.val > q.val: # 6>4 and 2
                root = root.left 
            elif root.val == p.val or root.val == q.val: # 
                return root