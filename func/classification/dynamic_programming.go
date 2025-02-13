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

func Generate(numRows int) [][]int {
	triangles := make([][]int, numRows)

	for i := 0; i < numRows; i++ {
		triangles[i] = make([]int, i+1)

		triangles[i][0] = 1
		triangles[i][i] = 1

		for j := 1; j < i; j++ {
			triangles[i][j] = triangles[i-1][j-1] + triangles[i-1][j]
		}
	}

	return triangles
}

func Rob(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}
	if len(nums) == 0 {
		return 0
	}

	dp := make([]int, len(nums))

	dp[0] = nums[0]
	dp[1] = max(nums[0], nums[1])
	for i := 2; i < len(nums); i++ {
		dp[i] = max(dp[i-1], dp[i-2]+nums[i])
	}

	return dp[len(nums)-1]
}
