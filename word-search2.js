// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]
// Input: board = [["a","b"],["c","d"]], words = ["abcb"]
// Output: []
class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }

      node = node.children[char];
    }

    node.isWord = true;
  }

  getRoot() {
    return this.root;
  }
}
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (board, words) {
  const trie = new Trie();

  for (let word of words) {
    trie.insert(word);
  }

  const root = trie.getRoot();
  const rows = board.length;
  const cols = board[0].length;
  const result = new Set();
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const backTrack = function (row, col, node, path) {
    const char = board[row][col];

    if (!node.children[char]) return;

    node = node.children[char];
    path += char;

    if (node.isWord) {
      result.add(path);
    }

    board[row][col] = '#';
    for (let [dx, dy] of direction) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        board[newRow][newCol] !== '#'
      ) {
        backTrack(newRow, newCol, node, path);
      }
    }

    board[row][col] = char;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      backTrack(r, c, root, '');
    }
  }

  return Array.from(result);
};
