// Example 1:
//
// Input: s = "egg", t = "add"
//
// Output: true
//
// Explanation:
//
//   The strings s and t can be made identical by:
//
//   Mapping 'e' to 'a'.
//   Mapping 'g' to 'd'.
//   Example 2:
//
// Input: s = "foo", t = "bar"
//
// Output: false
//
// Explanation:
//
//   The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.
//
//   Example 3:
//
// Input: s = "paper", t = "title"
//
// Output: true
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isIsomorphic = function(s, t) {
  let mapS = {};
  let mapT = {};

  for (let i = 0; i < s.length; i++) {
    if (mapS[s[i]] && mapS[s[i]] !== t[i]) {
      return false;
    }


    if (mapT[t[i]] && mapT[t[i]] !== s[i]) {
      return false;
    }

    mapS[s[i]] = t[i];
    mapT[t[i]] = s[i];
  }

  return true;
};

const s = 'paper', t = 'title';
console.log(isIsomorphic(s, t));