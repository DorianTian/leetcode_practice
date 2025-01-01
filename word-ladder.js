// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]];

  while (queue.length) {
    const [current, steps] = queue.shift();

    for (let i = 0; i < current.length; i++) {
      for (let charCode = 97; charCode <= 122; charCode++) {
        let char = String.fromCharCode(charCode);
        if (current[i] === char) continue;

        let newWord = current.slice(0, i) + char + current.slice(i + 1);

        if (newWord === endWord) return steps + 1;

        if (wordSet.has(newWord)) {
          queue.push([newWord, steps + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }

  return 0;
};
