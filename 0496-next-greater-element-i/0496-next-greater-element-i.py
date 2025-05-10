class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]: 
        stack = []
        location = {}

        for num in nums2:
            while stack and num > stack[-1]:
                top = stack.pop()
                location[top] = num
            stack.append(num)

        while stack:
            top2 = stack.pop()
            location[top2] = -1

        return [location.get(i, -1) for i in nums1]        