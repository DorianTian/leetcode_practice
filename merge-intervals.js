// Example 1:
//
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
//   Example 2:
//
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  const result = [];

  for (let i = 0; i < sortedIntervals.length; i++) {
    if (result.length === 0 || result[result.length - 1][1] < sortedIntervals[i][0]) {
      result.push(sortedIntervals[i]);
    } else {
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], sortedIntervals[i][1]);
    }
  }

  return result;
};

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge(intervals));
