class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        total = 0
        for i in range(0, k):
            total += nums[i]

        res = total

        for i in range(k, len(nums)):
            total+= nums[i]
            total-= nums[i-k]
            res = max(total, res)

        return res/k
            