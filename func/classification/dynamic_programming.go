package classification

func ClimbStairsWithDP(n int) int {
	dp := make([]int, n+1)
	dp[0] = 1
	dp[1] = 1

	for i := 2; i <= n; i++ {
		dp[i] = dp[i-1] + dp[i-2]
	}

	return dp[n]
}

func ClimbStairsWithSlidingWindow(n int) int {
	if n <= 1 {
		return n
	}
	prev1 := 1
	prev2 := 1

	for i := 2; i <= n; i++ {
		current := prev2 + prev1
		prev2 = prev1
		prev1 = current
	}

	return prev1
}
