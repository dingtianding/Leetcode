class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        i = 0
        j = 0
        res = 0

        for k in range(len(nums)):
            res = max(res, j * nums[k])
            j = max(j, i - nums[k])
            i = max(i, nums[k])


        return res 
