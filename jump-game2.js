/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumps = 0; // 跳跃次数
  let current_end = 0; // 当前跳跃范围的边界
  let farthest = 0; // 当前能够到达的最远位置

  if (nums.length === 1) {
    return jumps;
  }

  for (let i = 0; i < nums.length; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === current_end) {
      jumps++;
      current_end = farthest;

      if (farthest >= nums.length - 1) {
        return jumps;
      }
    }
  }
};

const nums = [2, 3, 1, 1, 4];

console.log(jump(nums));

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2
