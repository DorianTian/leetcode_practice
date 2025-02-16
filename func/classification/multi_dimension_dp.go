package classification

func UniquePaths(m int, n int) int {
	dp := make([][]int, m)

	for i := range dp {
		dp[i] = make([]int, n)
	}

	for i := 0; i < m; i++ {
		dp[i][0] = 1
	}

	for j := 0; j < n; j++ {
		dp[0][j] = 1
	}

	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			dp[i][j] = dp[i-1][j] + dp[i][j-1]
		}
	}

	return dp[m-1][n-1]
}

func MinPathSum(grid [][]int) int {
	dp := make([][]int, len(grid))

	for i := range dp {
		dp[i] = make([]int, len(grid[0]))
	}

	dp[0][0] = grid[0][0]

	for i := 1; i < len(grid); i++ {
		dp[i][0] = grid[i][0] + dp[i-1][0]
	}

	for j := 1; j < len(grid[0]); j++ {
		dp[0][j] = grid[0][j] + dp[0][j-1]
	}

	for i := 1; i < len(grid); i++ {
		for j := 1; j < len(grid[0]); j++ {
			dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])
		}
	}

	return dp[len(grid)-1][len(grid[0])-1]
}

func LongestPalindrome(s string) string {
	if len(s) <= 1 {
		return s
	}

	dp := make([][]bool, len(s))
	for i := range dp {
		dp[i] = make([]bool, len(s))
	}

	for i := 0; i < len(s); i++ {
		dp[i][i] = false
	}

	longestPalin := s[0:1]

	for length := 1; length <= len(s); length++ {
		for i := 0; i <= len(s)-length; i++ {
			j := i + length - 1

			if s[i] == s[j] {
				if length <= 2 {
					dp[i][j] = true
				} else {
					dp[i][j] = dp[i+1][j-1]
				}
			}

			if dp[i][j] && length > len(longestPalin) {
				longestPalin = s[i : j+1]
			}
		}
	}

	return longestPalin
}
