/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // count代表的是论文篇数
  // citation代表的是论文引用数
  let counts = new Array(citations.length + 1).fill(0);

  for (const citation of citations) {
    if (citation >= citations.length) {
      counts[citations.length]++;
      continue;
    }
    counts[citation]++;
  }
  console.log("counts: ", counts);
  let total = 0;
  for (let i = counts.length - 1; i >= 0; i--) {
    total = counts[i] + total;
    if (total >= i) {
      return i;
    }
  }
};

// const citations = [3, 0, 6, 1, 5];
const citations = [1, 3, 1];
console.log(hIndex(citations));
// Input: citations = [3,0,6,1,5]
// Output: 3
