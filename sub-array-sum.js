/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
  let count = 0;
  let prefixSum = 0;
  const sumMap = new Map();
  sumMap.set(0, 1)

  for (const num of nums) {
    prefixSum += num;
    if (sumMap.has(prefixSum - k)) {
      count = count + sumMap.get(prefixSum - k)
    }

    sumMap.set(prefixSum, sumMap.has(prefixSum) ? sumMap.get(prefixSum) + 1 : 1)
  }

  return count
};

const nums = [1, 1, 1];
console.log(subarraySum(nums, 2));

