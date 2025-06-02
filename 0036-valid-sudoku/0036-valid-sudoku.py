class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        cols = collections.defaultdict(set)
        rows = collections.defaultdict(set)
        sqrs = collections.defaultdict(set)#0-2, 0-2 = [0][0] on matrix, [9][9] should be[2][2]


        for r in range(9):
            for c in range(9):
                if board[r][c] == ".":
                    continue
                if (board[r][c] in rows[r]) or (board[r][c] in cols[c]) or (board[r][c] in sqrs[r//3, c//3]):   
                    # print(r,c,board[r][c])
                    # print(cols)
                    return False
                cols[c].add(board[r][c])
                rows[r].add(board[r][c])
                sqrs[(r//3, c//3)].add(board[r][c])
        return True
        