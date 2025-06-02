#

class Codec:
    def encode(self, strs: List[str]) -> str:
        """Encodes a list of strings to a single string.
        """
        res = ""
        for s in strs:#hello, world
            res += str(len(s)) + "#" + s # 5#Hello
        
        return res

        

    def decode(self, s: str) -> List[str]:
        """Decodes a single string to a list of strings
        """
        res = []
        i = 0
        while i < len(s):
            j = i
            while s[j] != "#":
                j += 1
            length = int(s[i:j])#get lenght in form of int(4 or 10)
            res.append(s[j + 1: j + 1 +length]) #slice the j+1 start to j+1+length end
            i = j + 1 + length #move i pointer

        return res


# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(strs))