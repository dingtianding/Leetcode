class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        result = 0
        low = float("inf")
        for price in prices
            low = min(low, price)
            new = price - low
            result = max(result, new)



        return result
        