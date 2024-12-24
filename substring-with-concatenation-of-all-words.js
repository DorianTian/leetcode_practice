// Example 1:
//
// Input: s = "barfoothefoobarman", words = ["foo","bar"]
//
// Output: [0,9]
//
// Explanation:
//
//   The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
//   The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
//
//   Example 2:
//
// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
//
// Output: []
//
// Explanation:
//
//   There is no concatenated substring.
//
//   Example 3:
//
// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
//
// Output: [6,9,12]
//
// Explanation:
//
//   The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
//   The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
//   The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {

};