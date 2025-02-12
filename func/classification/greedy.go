package classification

func MaxProfit(prices []int) int {
	maxProfit := 0
	minProfit := prices[0]

	for i := 0; i < len(prices); i++ {
		if prices[i] < minProfit {
			minProfit = prices[i]
		} else {
			maxProfit = max(maxProfit, prices[i]-minProfit)
		}
	}

	return maxProfit
}
