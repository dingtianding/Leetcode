class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        freq = [0] * 26 #[0,0,0...]
        # keep count of freq of task
        for task in tasks:
            index = ord(task)-ord('A') # A- A = index of 0, B would be 1
            freq[index] += 1
            #[3,3,0....]
        
        freq.sort() #small to greatest by default [...0,3,3]
        
        mostFreq = freq.pop() # get 3 for A
        mostFreqGap = mostFreq - 1 # there is 2 gap between 3 letter
        idle_t = mostFreqGap * n # if we populate with A, we have idle_t of idles. 2 * 2
        
        while freq and idle_t > 0:
            nextFreq = freq.pop() # get 3 for B
            idle_t -= min(mostFreqGap, nextFreq) # 2 < 3, we take 2
            
        idle_t = max(0, idle_t)
            
        return idle_t + len(tasks)
            
        