// Example 1:
//
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
//   Example 2:
//
// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:
//
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
let minSubArrayLen = function(target, nums) {
  let minLen = Infinity;
  let start = 0;
  let sum = 0;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];

    while (sum >= target) {
      minLen = Math.min(minLen, end - start + 1);
      sum -= nums[start];
      start++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

const nums = [2, 3, 1, 2, 4, 3], target = 7;
console.log(minSubArrayLen(target, nums));