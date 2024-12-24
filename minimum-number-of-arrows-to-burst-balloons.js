// Example 1:
//
// Input: points = [[10,16],[2,8],[1,6],[7,12]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
//   - Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
// - Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
//   Example 2:
//
// Input: points = [[1,2],[3,4],[5,6],[7,8]]
// Output: 4
// Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.
//   Example 3:
//
// Input: points = [[1,2],[2,3],[3,4],[4,5]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
//   - Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
// - Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].
/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function(points) {
  if (points.length === 0) return 0;

  const sortedPoints = points.sort((a, b) => a[1] - b[1]);
  let currentEnd = sortedPoints[0][1];
  let arrows = 1;

  for (let i = 1; i < sortedPoints.length; i++) {
    if (sortedPoints[i][0] > currentEnd) {
      arrows++;
      currentEnd = Math.max(currentEnd, sortedPoints[i][1]);
    }
  }

  return arrows;
};

const points = [[1, 2], [3, 4], [5, 6], [7, 8]];

console.log(findMinArrowShots(points));