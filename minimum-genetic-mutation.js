// Example 1:

// Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]
// Output: 1
// Example 2:

// Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
// Output: 2
/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
const minMutation = function (startGene, endGene, bank) {
  const bankSet = new Set(bank);

  if (!bankSet.has(endGene)) return -1;
  const queue = [[startGene, 0]];

  while (queue.length) {
    const [current, mutations] = queue.shift();
    const possibleGene = ['A', 'C', 'G', 'T'];

    for (let i = 0; i < current.length; i++) {
      for (let char of possibleGene) {
        if (current[i] === char) continue;
        let newGene = current.slice(0, i) + char + current.slice(i + 1);

        if (newGene === endGene) return mutations + 1;

        if (bankSet.has(newGene)) {
          queue.push([newGene, mutations + 1]);
          bankSet.delete(newGene);
        }
      }
    }
  }

  return -1;
};
