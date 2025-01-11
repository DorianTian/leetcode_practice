// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const n = s.length;
  if (n <= 1) return s;
  const dp = Array.from({ length: n }, () =>
    Array.from({ length: n }).fill(false)
  );

  let longestPlain = s[0];

  for (let length = 1; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1;

      if (s[i] === s[j]) {
        if (length <= 2) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && length > longestPlain.length) {
        longestPlain = s.substring(i, j + 1);
      }
    }
  }

  return longestPlain;
};

const s = 'bb';
console.log(longestPalindrome(s));
