class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        count = {}
        for num in nums:
            count[num] = 1 + count.get(num, 0)
            
        
        heap = []
        for num in count.keys():
            heapq.heappush(heap, (count[num], num))
            if len(heap) > k:
                heapq.heappop(heap)
                
        res = []
        
        for i in range(k):
            res.append(heapq.heappop(heap)[1])
            
        return res