// Example 1:

// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
// Example 2:

// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    // 将 n 右移 i 位并与 1 做 & 运算，取出最低位
    let bit = (n >> i) & 1;
    // 将 bit 放到结果的对应位置，使用左移操作
    result = (result << 1) | bit;
  }

  return result >>> 0; // 返回一个无符号整数
};

const n = 0b11111111111111111111111111111101;
console.log(reverseBits(n));
