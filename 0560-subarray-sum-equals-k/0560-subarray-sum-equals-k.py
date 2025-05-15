#window
# 1,1,1
# if curSum > k
# move left
# 

class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        prefix = {0 : 1} # this set the base case for when you have a perfect match, count increase by one
        count = 0
        current = 0
        for num in nums:
            current += num #increase current
            diff = current - k # if current is beyond k
            count += prefix.get(diff, 0) # we search for count of prefix that equals to the difference
            prefix[current] = prefix.get(current, 0) + 1 # we log the current prefix

        return count