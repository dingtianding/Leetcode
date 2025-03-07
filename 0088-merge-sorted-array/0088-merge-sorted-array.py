class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        reader1 = 0  # reader for nums1 (original elements)
        reader2 = 0  # reader for nums2 (elements to merge in)
        nums1_copy = nums1[:m]  # make a copy of the first m elements of nums1 (original array)

        for writer in range(m + n):
            if reader2 >= n or (reader1 < m and nums1_copy[reader1] <= nums2[reader2]):
                nums1[writer] = nums1_copy[reader1]
                reader1 += 1
            else:
                nums1[writer] = nums2[reader2]
                reader2 += 1
         