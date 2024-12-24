// Example 1:
//
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:
//
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
  const mergeIntervals = (interval) => {
    let result = [];
    let sortedInterval = interval.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < sortedInterval.length; i++) {
      if (result.length === 0 || result[result.length - 1][1] < sortedInterval[i][0]) {
        result.push(sortedInterval[i]);
      } else {
        result[result.length - 1][1] = Math.max(result[result.length - 1][1], sortedInterval[i][1]);
      }
    }

    return result;
  };

  const insertionInterval = intervals.concat([newInterval]);
  // console.log(insertionInterval);
  return mergeIntervals(insertionInterval);
};

const intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8];
console.log(insert(intervals, newInterval));