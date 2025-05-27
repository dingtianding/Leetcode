"""
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

# 2
["(())",()()]

Constraints:

1 <= n <= 8
"""
# "".join([1,2,3]) O(n)
# "1" + "2" + "3" => O(n * n) 
# nesting
# paren = string being built
# left = count of opeing
# right = count of closing
# left and right is going to be used as conditions(if statemnets) for what we add to our paren
# 
# def dfs(paren=[], left=0, right =0)
#   if len(paren) == 2 * n:
#     result.append("".join(paren))
#     return
#    if left < n: 3 = 3
#.      add opening. to paren 
#.      dfs(paren, left+1, right) # go left = adds opening
#.   if right < left: # need opening before -> so right is based on left
#       add closing to paren
#       dfs(paren, left, right+1) # go right = add closing
# result = []
# dfs(paren=[], left=0, right =0)
# return result
#time 2^N
#space N
# N = depth
#call stack vs space recursion
# n!
# n! 1*2*..* n
# N * N
# dfs(left)
# dfs(right)
#  ())
"""
n = 2
                []
            ["("] 
        ["(("]  ["()"]
    ["(()"]   ["()("]
["(())"]           ["()()"]
"""
"""
dfs(["(", "(", ")", ")"], 2, 2)
dfs(["(", "(", ")"], 2, 1)
dfs(["(", "("], 2, 0)
dfs(["("], 1, 0)
dfs([], 0, 0)
"""
from typing import List
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        result = []
        #result = []
        def dfs(paren, left, right): #["(","(","(",")",")",")"], 3, 3
            # print(paren)
            if len(paren) == 2 * n:
                result.append("".join(paren))
                return
            if left < n: # 3 < 3 it is okay to go left
                paren.append("(") 
                dfs(paren, left+1, right) 
                paren.pop()
                #paren = ["(","(","(",], 3, 0
                #paren = ["(","(",], 2, 0
                #paren = ["(","(",")","(",")"")"], 3, 3

                #paren = ["(","(",")"], 2, 1

                #paren = ["(","(",")",")","("], 3, 2


            if right < left: # 0 < 3
                paren.append(")")
                dfs(paren, left, right+1)
                paren.pop()
 
                #paren = ["(","(",")","(",")",")"], 3, 3
                #paren = ["(","(",")","(",")"], 3, 2
                #paren = ["(","(",")","("], 3, 1

                #paren = ["(","(",")"], 2, 1

                #paren = ["(","(",")",")"], 2, 1

                #paren = ["(","(",")",")","(",")"], 3, 3

# need opening before closing -> so right is based on left

                
        dfs([],0,0)
        return result

# # Example 1:
# # Input: n = 3
# # Output: ["((()))","(()())","(())()","()(())","())()()"]
# print(Solution().generateParenthesis(3))
# # Example 2:
# # Input: n = 1
# # Output: ["()"]
# print(Solution().generateParenthesis(1))
