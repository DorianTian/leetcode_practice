// Example 1:

// Input: nums = [1,-2,3,-2]
// Output: 3
// Explanation: Subarray [3] has maximum sum 3.
// Example 2:

// Input: nums = [5,-3,5]
// Output: 10
// Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.
// Example 3:

// Input: nums = [-3,-2,-3]
// Output: -2
// Explanation: Subarray [-2] has maximum sum -2.
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubarraySumCircular = function (nums) {
  const n = nums.length;

  const Kadane = function (list, findMax) {
    let resultSum = list[0];
    let currentSum = list[0];

    for (let i = 1; i < list.length; i++) {
      if (findMax) {
        currentSum = Math.max(list[i], currentSum + list[i]);
      } else {
        currentSum = Math.min(list[i], currentSum + list[i]);
      }

      resultSum = findMax
        ? Math.max(resultSum, currentSum)
        : Math.min(resultSum, currentSum);
    }

    return resultSum;
  };

  const maxArraySum = Kadane(nums, true);
  const minArraySum = Kadane(nums, false);
  const totalArraySum = nums.reduce((num, current) => num + current, 0);

  if (maxArraySum < 0) {
    return maxArraySum
  }

  return Math.max(maxArraySum, totalArraySum - minArraySum);
};
