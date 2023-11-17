# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
#
#
#
#
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
#         pArray = []
#         qArray = []
        
#         def dfs(tree, array):
#             if not tree:
#                 return None
            
#             array.push(tree.val)
            
#             dfs(tree.left)
#             dfs(tree.right)
            
        
#         dfs(p, pArray)
#         dfs(q, qArray)
        
#         return pArray == qArray
        if not p and not q:
            return True
        if p and q and p.val == q.val:
            return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
        else:
            return False