class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        hash = set(nums)

        n = len(nums) + 1

        for number in range(n):
            if number not in hash:
                return number