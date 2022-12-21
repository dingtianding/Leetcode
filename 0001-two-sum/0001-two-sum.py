class Solution(object):
    # def twoSum(self, nums, target):
    #     for i in range(len(nums) - 1):
    #         num1 = nums[i]
    #         for j in range(i + 1,len(nums)):
    #             num2 = nums[j]
    #             if num1 + num2 == target:
    #                 return [i, j]
    #     return []
    def twoSum(self, nums, target):
        hash = {}
        for i in range(len(nums)):
            num = nums[i]
            part = target - num
            if part in hash:
                return [i, hash[part]]
            else:
                hash[num] = i
        return []
        
    

        
        
    

        