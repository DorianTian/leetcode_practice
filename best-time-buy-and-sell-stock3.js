// Example 1:

// Input: prices = [3,3,5,0,0,3,1,4]
// Output: 6
// Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
// Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let hold1 = -Infinity;
  let sell1 = 0;
  let hold2 = -Infinity;
  let sell2 = 0;

  for (const price of prices) {
    hold1 = Math.max(hold1, -price);
    sell1 = Math.max(sell1, hold1 + price);
    hold2 = Math.max(hold2, sell1 - price);
    sell2 = Math.max(sell2, hold2 + price);
  }

  return sell2;
};
