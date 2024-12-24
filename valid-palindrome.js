// Example 1:
//
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
//   Example 2:
//
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
//   Example 3:
//
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
//   Since an empty string reads the same forward and backward, it is a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;

  const isAlphanumeric = (c) => {
    return /^[a-z0-9]$/i.test(c);
  };

  while (i < j) {
    while (i < j && !isAlphanumeric(s[i])) {
      i++;
    }
    while (i < j && !isAlphanumeric(s[j])) {
      j--;
    }
    if (s[i].toLowerCase() === s[j].toLowerCase()) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
};

const s = '.,';
console.log(isPalindrome(s));