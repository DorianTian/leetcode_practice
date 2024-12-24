// Example 1:
//
// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
//   [
//     "This    is    an",
//     "example  of text",
//     "justification.  "
//   ]
// Example 2:
//
// Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// Output:
//   [
//     "What   must   be",
//     "acknowledgment  ",
//     "shall be        "
//   ]
// Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
//   Note that the second line is also left-justified because it contains only one word.
//   Example 3:
//
// Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
// Output:
//   [
//     "Science  is  what we",
//     "understand      well",
//     "enough to explain to",
//     "a  computer.  Art is",
//     "everything  else  we",
//     "do                  "
//   ]
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
let fullJustify = function(words, maxWidth) {
  let result = [];
  let line = [];
  let lineLength = 0;
  for (const word of words) {
    if (lineLength + line.length + word.length > maxWidth) {
      const spaces = maxWidth - lineLength;

      if (line.length === 1) {
        result.push(line[0] + ' '.repeat(spaces));
      } else {
        const gaps = line.length - 1;
        const spacePerGap = Math.floor(spaces / gaps);
        const extraSpaces = spaces % gaps;

        let justifiedLine = '';
        for (let i = 0; i < line.length; i++) {
          justifiedLine += line[i];
          if (i < gaps) {
            // 如果想优先分配给右侧空隙，我们需要确定“前面哪些空隙不用分配多余空格”，并从某个特定索引开始为后续空隙分配多余的空格。
            // 右侧逻辑: justifiedLine += ' '.repeat(spacePerGap + (i > gaps - extraSpaces ? 1 : 0))
            justifiedLine += ' '.repeat(spacePerGap + (i < extraSpaces ? 1 : 0));
          }
        }

        result.push(justifiedLine);
      }

      line = [];
      lineLength = 0;
    }
    line.push(word);
    lineLength += word.length;
  }

  const lastLine = line.join(' ') + ' '.repeat(maxWidth - lineLength - (line.length - 1));
  result.push(lastLine);

  return result;
};

const words = ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], maxWidth = 16;
console.log(fullJustify(words, maxWidth));