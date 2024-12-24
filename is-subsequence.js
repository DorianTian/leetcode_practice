// Example 1:
//
// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:
//
// Input:
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isSubsequence = function(s, t) {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }

    j++;
  }

  return i === s.length;
};

// const s = 'abc', t = 'ahbgdc';
const s = 'axc', t = 'ahbgdc';
console.log(isSubsequence(s, t));