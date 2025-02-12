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

func Jump2(nums []int) int {
	if len(nums) <= 1 {
		return 0
	}
	jumps := 0
	farthest := 0
	endOfCurrentJump := 0

	for i := 0; i < len(nums); i++ {
		farthest = max(farthest, nums[i]+i)

		if i == endOfCurrentJump {
			jumps++
			endOfCurrentJump = farthest

			if farthest >= len(nums)-1 {
				return jumps
			}
		}
	}

	return jumps
}
