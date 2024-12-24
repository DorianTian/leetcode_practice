// Example 1:
//
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:
//
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
  const numSet = new Set(nums);
  let longestLength = 0;

  for (const num of nums) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLong = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLong++;
      }

      longestLength = Math.max(longestLength, currentLong);
    }
  }

  return longestLength;
};

const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));