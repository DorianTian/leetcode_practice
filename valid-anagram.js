// Example 1:
//
// Input: s = "anagram", t = "nagaram"
//
// Output: true
//
// Example 2:
//
// Input: s = "rat", t = "car"
//
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  console.log(map);

  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) {
      return false;
    } else {
      map[t[i]]--;
    }
  }

  return true;
};

const s = 'anagram', t = 'nagaram';
console.log(isAnagram(s, t));