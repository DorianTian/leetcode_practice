// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  // const dp = Array.from({ length: nums.length }, () => 0);
  // dp[0] = nums[0];
  // dp[1] = Math.max(nums[0], nums[1]);

  // for (let i = 2; i < nums.length; i++) {
  //   dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  // }

  // return dp[nums.length - 1];
  let prev2 = 0;
  let prev1 = 0;

  for (let i = 0; i < nums.length; i++) {
    let current = Math.max(prev1, prev2 + nums[i]);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
};
