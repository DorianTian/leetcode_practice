// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;

  let left = 0;
  let right = m;

  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    const j = Math.floor((m + n + 1) / 2) - i;

    const nums1LeftMax = i > 0 ? nums1[i - 1] : -Infinity;
    const nums1RightMin = i < m ? nums1[i] : Infinity;
    const nums2LeftMax = j > 0 ? nums2[j - 1] : -Infinity;
    const nums2RightMin = j < n ? nums2[j] : Infinity;

    if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
      if ((m + n) % 2 === 0) {
        return (
          (Math.max(nums1LeftMax, nums2LeftMax) +
            Math.min(nums1RightMin, nums2RightMin)) /
          2
        );
      } else {
        return Math.max(nums1LeftMax, nums2LeftMax);
      }
    } else if (nums1LeftMax > nums2RightMin) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
};
