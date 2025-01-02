// Example 1:

// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
// Example 2:

// Input: n = 1, k = 1
// Output: [[1]]
// Explanation: There is 1 choose 1 = 1 total combination.
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  const result = [];

  const backTrack = function (index, combineResult) {
    if (combineResult.length === k) {
      result.push([...combineResult]);
      return;
    }

    for (let i = index; i <= n; i++) {
      combineResult.push(i);

      backTrack(i + 1, combineResult);
      combineResult.pop();
    }
  };

  backTrack(1, []);

  return result;
};
