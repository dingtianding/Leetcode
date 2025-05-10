class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]: 
        stack = []
        location = {}

        for num in nums2: # 2
            while stack and num > stack[-1]: #
                top = stack.pop() #3
                location[top] = num #{1:3,3:4}
            stack.append(num) #[4,2]

        while stack: #[4,2]
            top2 = stack.pop()
            location[top2] = -1#{1:3,3:4,2:-1,4:-1}
        result = []
        for num in nums1:
            result.append(location.get(num, -1))

        return result        