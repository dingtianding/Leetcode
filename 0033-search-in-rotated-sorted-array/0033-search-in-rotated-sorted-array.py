# bsearch:
# 1.7 > target
# 1a.4 > target < 2 target smaller than both end then right
# 1b. target > 4  > 2 target great than both end then left 
# 1c. if target is equal to end, return that end
# Input: nums = [4,5,6,7,0,1,2], target = 0
# mid is at backend
# target is left if its between 4 and 7
# target is right is not
# Input: nums = [5,6,7,0,1,2,4], target = 3
# mid is at the frontend
# target is at right if its between 0 and 4
# taget is at left if its not

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1

        while l <= r:
            mid = (l + r) // 2

            if target == nums[mid]:
                return mid

            if nums[l] <= nums[mid]: # 7 > 4, so 
                if target > nums[mid] or target < nums[l]: # if target is out of range, figure out which side is the target at
                    l = mid + 1 # move it to right
                else:
                    r = mid - 1 # inrange thenan to left
                    
            else: # 
                if target < nums[mid] or target > nums[r]:
                    r = mid - 1
                else:
                    l = mid + 1
        return -1


        