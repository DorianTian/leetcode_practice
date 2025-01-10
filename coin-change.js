// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  const dp = Array.from({ length: amount + 1 }, () => Infinity);

  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let count of coins) {
      if (i >= count) {
        dp[i] = Math.min(dp[i - count] + 1, dp[i]);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
