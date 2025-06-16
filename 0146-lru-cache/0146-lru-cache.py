class Node:
    def __init__(self, key, val):
        self.key, self.val = key, val
        self.prev = self.next = None
class LRUCache:

    def __init__(self, capacity: int):
        self.cap = capacity #set the cap to variable
        self.cache = {} #start a hash

        self.left, self.right = Node(0, 0), Node(0, 0) #start two empty node for DLL
        self.left.next, self.right.prev = self.right, self.left #set up their pointers
    # remove node from list
    def remove(self, node): # 1<>2<>3 -> 1>3, 1<3
        prev, nxt = node.prev, node.next #put the current nodes' pointers into variable
        prev.next, nxt.prev = nxt, prev #set prev.next's pointer to next, and set next.prev's pointer to prev, skipping the node
    
    #insert node at the right most(most recently used)
    def insert(self, node):
        prev, nxt = self.right.prev, self.right #set up variable for prev and nxt with the right
        prev.next = nxt.prev = node #set pointers to that node
        node.next, node.prev = nxt, prev #


    def get(self, key: int) -> int:
        if key in self.cache:
            self.remove(self.cache[key])# take out 
            self.insert(self.cache[key])# put to right most for most frequently used
            return self.cache[key].val #return
        return -1
        

    def put(self, key: int, value: int) -> None:
        if key in self.cache: #if cache hit
            self.remove(self.cache[key]) # that one gets removed
        self.cache[key] = Node(key,value)# put into our hash for quick access
        self.insert(self.cache[key])#put the Node into our LL

        if len(self.cache) > self.cap:# if part of the insert, we reached our cap
            #remove the LRU from hashmap and the LL
            lru = self.left.next #lru is left. next
            self.remove(lru) #remove from LL
            del self.cache[lru.key] # remove from hash

        


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)