class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        l  = 0
        minSize = float('inf')
        curSum = 0
        n = len(nums)

        for i in range(n):
            right = nums[i]
            left = nums[l]
            curSum += right
            while curSum >= target:
                # print(i, l)
                minSize = min(minSize, i - l + 1) # +1 as 3 - 0 = 3, but there are 4 in range(0,1,2,3)
                curSum = curSum - nums[l]
                l += 1

        return minSize if minSize != float('inf') else 0