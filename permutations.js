// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const result = [];

  const backTrack = function (currentPermutation, remainPermutation) {
    if (currentPermutation.length === nums.length) {
      result.push([...currentPermutation]);
      return;
    }

    for (let i = 0; i < remainPermutation.length; i++) {
      currentPermutation.push(remainPermutation[i]);
      backTrack(
        currentPermutation,
        remainPermutation.slice(0, i).concat(remainPermutation.slice(i + 1))
      );
      currentPermutation.pop();
    }
  };

  backTrack([], nums);
  return result;
};
