// Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
  let lcp = strs[0];

  for (let i = 1; i <= strs.length - 1; i++) {
    let k = 0;
    while (k < lcp.length && k < strs[i].length && lcp[k] === strs[i][k]) {
      k++;
    }

    lcp = lcp.substring(0, k);

    if (lcp === '') return '';
  }

  return lcp;
};

const strs = ['flower', 'flow', 'flight'];

console.log(longestCommonPrefix(strs));