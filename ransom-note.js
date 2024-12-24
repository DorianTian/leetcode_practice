// Example 1:
//
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
//
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
//
// Input: ransomNote = "aa", magazine = "aab"
// Output: true
//

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
let canConstruct = function(ransomNote, magazine) {
  const charCount = {};
  for (const char of magazine) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of ransomNote) {
    if (!charCount[char] || charCount[char] === 0) {
      return false;
    }

    charCount[char]--;
  }

  return true;
};

const ransomNote = 'aab', magazine = 'baa';
console.log(canConstruct(ransomNote, magazine));