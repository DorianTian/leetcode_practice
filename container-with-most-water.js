// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
//   In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
//
// Input: height = [1,1]
// Output: 1
/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const currentArea = (right - left) * Math.min(height[left], height[right]);

    if (maxArea < currentArea) {
      maxArea = currentArea;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));