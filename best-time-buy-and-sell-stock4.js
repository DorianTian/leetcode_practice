// Example 1:

// Input: k = 2, prices = [2,4,1]
// Output: 2
// Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
// Example 2:

// Input: k = 2, prices = [3,2,6,5,0,3]
// Output: 7
// Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (k, prices) {
  const n = prices.length;
  if (n === 0) return 0;

  if (k >= n / 2) {
    let profit = 0;
    for (let i = 1; i < n; i++) {
      if (prices[i] > prices[i - 1]) {
        profit += prices[i] - prices[i - 1];
      }
    }
    return profit;
  }

  const dp = Array.from({ length: k + 1 }, () =>
    Array.from({ length: n }).fill(0)
  );

  for (let j = 1; j <= k; j++) {
    let maxProfit = -prices[0];
    for (let i = 1; i < n; i++) {
      dp[j][i] = Math.max(dp[j][i - 1], maxProfit + prices[i]);
      maxProfit = Math.max(maxProfit, dp[j - 1][i] - prices[i]);
    }
  }

  return dp[k][n - 1];
};
