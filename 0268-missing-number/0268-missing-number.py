class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        numbers = len(nums)
        nums.sort()
        print(nums)
        for i in range(0, numbers):
            print(i, nums[i])
            if i != nums[i]: 
                return i

        return numbers