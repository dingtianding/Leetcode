#Understand
#Match
#Plan
#Implement
#Review
#Evaluate Big O
#
#Situation
#Task   
#Approach
#Result(Quantify)
#
# sort the nums
# if statement that checks duplicate as we interate through number
# if there is a duplicate, continue
# n ^ t/m + 1
# n * n ^ depth 
# 1
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]: 
        res = []
        nums.sort() #[1,2,2]
        
        def backtrack(i, subset):
            if i == len(nums): 
                res.append(subset[::])
                return
            subset.append(nums[i]) 
            backtrack(i + 1, subset) # [1,2,2]
            
            subset.pop() #[1,2]
            while  i + 1 < len(nums) and nums[i] == nums[i + 1]:
                i += 1
            backtrack(i + 1, subset)
        
        backtrack(0, [])
        return res
