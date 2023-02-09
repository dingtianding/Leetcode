/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const res = [];
    //left = # of (
    //right = # of )
const go = (left, right, string) => {
    if (string.length === 2 * n) {// we used up all the ()
      res.push(string);
      return;
    }

    if (left < n) go(left + 1, right, string+ '('); // # ( is under our limit
    if (right < left) go(left, right + 1, string + ')');
  };
  go(0, 0, '');
    
  return res;
};



