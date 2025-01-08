// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  let single = 0;

  for (let num of nums) {
    single ^= num;
  }

  return single;
};

const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
