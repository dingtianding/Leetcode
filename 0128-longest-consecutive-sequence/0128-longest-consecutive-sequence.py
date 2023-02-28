class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        longest = 0
        num_set = set(nums)
        
        for num in num_set:
            print(num)
            if num - 1 not in num_set: ## if this is the first number of the streak
                current_num = num ## set the starting
                current = 1 ## set the starting streak
                
                while current_num + 1 in num_set: ## keep checking the next number
                    current_num += 1 ##increase number
                    current += 1 ##increase streak
                    
                longest = max(longest,current)## check if current streak is greater
                
        return longest