// // Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
/**
 * @param {number[]} height
 * @return {number}
 */
// let trap = function(height) {
//   if (height.length === 0) return 0;
//   let n = height.length;
//
//   let trap_waters = 0;
//   let leftMaxHeightArray = new Array(n).fill(0);
//   let rightMaxHeightArray = new Array(n).fill(0);
//   console.log('leftMaxHeightArray: ', leftMaxHeightArray);
//
//   leftMaxHeightArray[0] = height[0];
//   for (let i = 1; i < n; i++) {
//     leftMaxHeightArray[i] = Math.max(leftMaxHeightArray[i - 1], height[i]);
//   }
//
//   rightMaxHeightArray[n - 1] = height[n - 1];
//   for (let i = n - 2; i >= 0; i--) {
//     rightMaxHeightArray[i] = Math.max(rightMaxHeightArray[i + 1], height[i]);
//   }
//
//   console.log('leftMaxHeightArray: ', leftMaxHeightArray);
//   for (let i = 0; i < n; i++) {
//     trap_waters += Math.min(rightMaxHeightArray[i], leftMaxHeightArray[i]) - height[i];
//   }
//
//   return trap_waters;
// };
let trap = function(height) {
  if (height.length === 0) return 0;
  let n = height.length;
  let left_max = 0, right_max = 0;
  let left = 0, right = n - 1;
  let trapped_water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] > left_max) {
        left_max = height[left];
      } else {
        trapped_water += left_max - height[left];
      }
      left++;
    } else {
      if (height[right] > right_max) {
        right_max = height[right];
      } else {
        trapped_water += right_max - height[right];
      }
      right--;
    }
  }

  return trapped_water;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
