/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const newMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (newMap.has(complement)) {
      return [newMap.get(complement), i];
    }

    newMap.set(nums[i], i);
  }
};

// const nums = [2, 7, 11, 15];
// console.log(twoSum(nums, 9));

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const map = new Map();

  for (let str of strs) {
    const charCounts = Array.from({ length: 26 }, () => 0);

    for (let char of str) {
      charCounts[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const key = charCounts.join(',');
    if (!map.has(key)) {
      map.set(key, []);
    }
    const result = map.get(key);
    result.push(str);

    map.set(key, result);
  }

  console.log('map: ', map, map.values());
  return Array.from(map.values());
};

// const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// console.log(groupAnagrams(strs));

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {};

const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
