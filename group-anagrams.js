// Example 1:
//
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
//
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//
// Explanation:
//
//   There is no string in strs that can be rearranged to form "bat".
//   The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
//   The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
//   Example 2:
//
// Input: strs = [""]
//
// Output: [[""]]
//
// Example 3:
//
// Input: strs = ["a"]
//
// Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

let groupAnagrams = function (strs) {
  const map = {};
  for (let str of strs) {
    const charCount = new Array(26).fill(0);
    for (let char of str) {
      charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const key = charCount.join(',');

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(str);
  }

  return Object.values(map);
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));
// let groupAnagrams = function(strs) {
//   const validAnagram = (s, t) => {
//     if (s.length !== t.length) return false;
//
//     const map = {};
//     for (let i = 0; i < s.length; i++) {
//       map[s[i]] = (map[s[i]] || 0) + 1;
//     }
//
//     for (let i = 0; i < t.length; i++) {
//       if (!map[t[i]]) {
//         return false;
//       } else {
//         map[t[i]]--;
//       }
//     }
//
//     return true;
//   };
//
//   let group = [];
//   let hasValid = {};
//
//   for (let i = 0; i < strs.length; i++) {
//     if (hasValid[strs[i]]) {
//       continue;
//     }
//     let anagrams = [strs[i]];
//
//     for (let j = i + 1; j < strs.length; j++) {
//       if (validAnagram(strs[i], strs[j])) {
//         console.log(strs[i], strs[j]);
//         anagrams.push(strs[j]);
//         hasValid[strs[j]] = (hasValid[strs[j]] || 0) + 1;
//       }
//     }
//
//     group.push(anagrams);
//   }
//
//   return group;
// };
//
