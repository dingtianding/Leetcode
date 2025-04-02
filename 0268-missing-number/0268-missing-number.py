class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        numbers = len(nums)
        nums.sort()
        for i in range(0, numbers):
            if i != nums[i]: 
                return i

        return numbers