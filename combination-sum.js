// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const result = [];

  const backTrack = function (start, currentCandidates, remainTarget) {
    if (remainTarget === 0) {
      result.push([...currentCandidates]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i];
      if (num > remainTarget) break;
      currentCandidates.push(num);
      backTrack(i, currentCandidates, remainTarget - num);
      currentCandidates.pop();
    }
  };

  candidates.sort((a, b) => a - b);
  backTrack(0, [], target);
  return result;
};
