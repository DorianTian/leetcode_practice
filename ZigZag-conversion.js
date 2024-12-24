// Example 1:
//
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:
//
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
//   P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:
//
// Input: s = "A", numRows = 1
// Output: "A"

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function(s, numRows) {
  if (numRows === 1 || s.length <= numRows) {
    return s;
  }

  let rows = new Array(s.length).fill('');
  let currentRow = 0;
  let goingDown = false;

  for (let i = 0; i < s.length; i++) {
    rows[currentRow] += s[i];
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currentRow += goingDown ? 1 : -1;
  }

  return rows.join('');
};

const s = 'PAYPALISHIRING', numRows = 4;
console.log(convert(s, numRows));