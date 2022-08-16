class Solution(object):
    def merge(self, intervals):
        sortedIntervals = sorted(intervals, key=lambda x: x[0]) #sort based on 1st num x[0]

        mergedIntervals = [] #output
        currentInterval = sortedIntervals[0] #set 1st interval
        mergedIntervals.append(currentInterval) #push it

        for nextInterval in sortedIntervals: #iterate through the rest
            currentIntervalStart, currentIntervalEnd = currentInterval # set variable for 1st interval
            nextIntervalStart, nextIntervalEnd = nextInterval #set for 2nd

            if currentIntervalEnd >= nextIntervalStart: # if 1's end is greater 2's start == mergeable
                currentInterval[1] = max(currentIntervalEnd, nextIntervalEnd) # merge it by updating the 1's end to 2's end. no longer need 2 as it is "merged"
                #note this is updating the value in the mergedIntervals
            else:
                currentInterval = nextInterval #move to next
                mergedIntervals.append(currentInterval) #push the next one into it

        return mergedIntervals
            
        
        