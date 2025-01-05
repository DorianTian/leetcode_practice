// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let currentMaxSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMaxSum = Math.max(nums[i], currentMaxSum + nums[i]);
    maxSum = Math.max(maxSum, currentMaxSum);
  }

  return maxSum;
};
