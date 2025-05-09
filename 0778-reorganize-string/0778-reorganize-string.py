class Solution:
    def reorganizeString(self, s: str) -> str:
        #count freq
        counts = {}
        for char in s:
            counts[char] = counts.get(char, 0) + 1

        
        #build max heap based on freq count
        max_heap = [(-count, char) for char, count in counts.items()]
        heapq.heapify(max_heap)
        #build result
        res = []
        while len(max_heap) >= 2:
            count1, char1 = heapq.heappop(max_heap)
            count2, char2 = heapq.heappop(max_heap)

            res.extend([char1, char2])
            count1 += 1
            count2 += 1

            if count1 < 0:
                heapq.heappush(max_heap, (count1, char1))
            if count2 < 0:
                heapq.heappush(max_heap, (count2, char2))

        if max_heap:
            count, char = heapq.heappop(max_heap)
            if -count > 1:
                return ""
            res.append(char)

        return "".join(res)