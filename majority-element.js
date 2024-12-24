/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  function swap(list, index1, index2) {
    const temp = list[index1];
    list[index1] = list[index2];
    list[index2] = temp;
  }
  function partition(list, p, r) {
    const pivotElement = list[r];

    let i = p - 1;
    for (let j = p; j < r; j++) {
      if (list[j] < pivotElement) {
        i++;
        swap(list, j, i);
      }
    }

    swap(list, i + 1, r);
    return i + 1;
  }

  function quickSort(list, p, main) {
    if (p < main) {
      let q = partition(list, p, main);
      quickSort(list, p, q - 1);
      quickSort(list, q + 1, main);
    }
  }

  quickSort(nums, 0, nums.length - 1);

  console.log("nums", nums);
  return nums[Math.floor(nums.length / 2)];
};

const nums = [2, 2, 1, 1, 1, 2, 2];
// const nums = [4, 5, 4];
console.log("res: ", majorityElement(nums));
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
