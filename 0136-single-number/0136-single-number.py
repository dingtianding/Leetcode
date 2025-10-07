class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        #bit manipulation
        #XOR
        #0^0 = 0
        #1^1 = 0
        #1^0 = 1
        res = 0
        for num in nums:
            res = num ^ res
        return res
        