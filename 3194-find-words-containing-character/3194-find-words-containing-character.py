class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
        res = []

        for i, word in enumerate(words):
            for char in word:
                if char == x:
                    res.append(i)
                    break

        return res
        