class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        # frequencies of the tasks
        frequencies = [0] * 26
        for t in tasks:
            frequencies[ord(t) - ord('A')] += 1
        
        frequencies.sort()

        # max frequency
        f_max = frequencies.pop() # takes the A's frequency
        idle_time = (f_max - 1) * n # (f-max-1) the gap between A * n(cooldown time) = 4
        
        while frequencies and idle_time > 0: 
            idle_time -= min(f_max - 1, frequencies.pop())# smaller of A's gap and next freq num
                             # 2, 3
        idle_time = max(0, idle_time)# greater of 0 or idle_time if positive.

        return idle_time + len(tasks) # 0 + 26
    
    ##["A","A","A","A","A","A","B","B","B","B""B"]