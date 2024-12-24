// Example 1:
//
// Input: pattern = "abba", s = "dog cat cat dog"
//
// Output: true
//
// Explanation:
//
//   The bijection can be established as:
//
//   'a' maps to "dog".
// 'b' maps to "cat".
//   Example 2:
//
// Input: pattern = "abba", s = "dog cat cat fish"
//
// Output: false
//
// Example 3:
//
// Input: pattern = "aaaa", s = "dog cat cat dog"
//
// Output: false
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
let wordPattern = function(pattern, s) {
  let words = s.split(' ');  // 按空格分割字符串为单词数组

  if (words.length !== pattern.length) {  // 如果单词数与模式长度不一样，返回false
    return false;
  }

  let charToWordMap = new Map();  // 字符到单词的映射
  let wordToCharMap = new Map();  // 单词到字符的映射

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];

    // 检查字符到单词的映射
    if (charToWordMap.has(char)) {
      if (charToWordMap.get(char) !== word) {
        return false;
      }
    } else {
      charToWordMap.set(char, word);
    }

    // 检查单词到字符的映射
    if (wordToCharMap.has(word)) {
      if (wordToCharMap.get(word) !== char) {
        return false;
      }
    } else {
      wordToCharMap.set(word, char);
    }
  }

  return true;  // 如果遍历完后没有问题，返回true
};

const pattern = 'abba', s = 'dog constructor constructor dog';
console.log(wordPattern(pattern, s));