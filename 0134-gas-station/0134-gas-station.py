class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        if sum(gas) < sum(cost):
            return -1
        total = 0
        cur = 0
        answer = 0

        for i in range(len(gas)):
            net = gas[i] - cost[i] #5-2
            total += net #0
            cur += net #6

            if cur < 0:
                cur = 0 #0
                answer = i + 1 #3

        return answer if total >= 0 else -1