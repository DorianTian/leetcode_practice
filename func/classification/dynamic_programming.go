package classification

type ByDesc []int

func (a ByDesc) Less(i, j int) bool { return a[i] > a[j] }
func (a ByDesc) Len() int           { return len(a) }
func (a ByDesc) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }

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

func NumSquares(n int) int {
	dp := make([]int, n+1)

	for i := 1; i <= n; i++ {
		dp[i] = n + 1
	}

	for i := 1; i <= n; i++ {
		for j := 1; j*j <= i; j++ {
			dp[i] = min(dp[i], dp[i-j*j]+1)
		}
	}

	return dp[n]
}

func CoinChange(coins []int, amount int) int {
	dp := make([]int, amount+1)

	for i := 1; i <= amount; i++ {
		dp[i] = amount + 1
	}

	for _, coin := range coins {
		for i := coin; i <= amount; i++ {
			dp[i] = min(dp[i], dp[i-coin]+1)
		}
	}

	if dp[amount] == amount+1 {
		return -1
	}
	return dp[amount]
}

func WordBreak(s string, wordDict []string) bool {
	wordDictSet := make(map[string]string)
	for _, w := range wordDict {
		wordDictSet[w] = w
	}

	dp := make([]bool, len(s)+1)
	dp[0] = true

	for i := 1; i <= len(s); i++ {
		for j := 0; j <= i; j++ {
			if dp[j] && wordDictSet[s[j:i]] != "" {
				dp[i] = true
				break
			}
		}
	}

	return dp[len(s)]
}

func LengthOfLIS(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	dp := make([]int, len(nums))
	maxLen := 0

	for i := 0; i < len(nums); i++ {
		dp[i] = 1
	}

	for i := 0; i < len(nums); i++ {
		for j := 0; j < i; j++ {
			if nums[j] < nums[i] {
				dp[i] = max(dp[i], dp[j]+1)
			}
		}

		maxLen = max(dp[i], maxLen)
	}

	return maxLen
}

func MaxProduct(nums []int) int {
	minProd := nums[0]
	maxProd := nums[0]
	result := nums[0]

	for i := 1; i < len(nums); i++ {
		if nums[i] < 0 {
			maxProd, minProd = minProd, maxProd
		}

		maxProd = max(nums[i], nums[i]*maxProd)
		minProd = min(nums[i], nums[i]*minProd)
		result = max(result, maxProd)
	}

	return result
}

func CanPartition(nums []int) bool {
	sum := 0
	for _, num := range nums {
		sum += num
	}

	if sum%2 == 1 {
		return false
	}

	target := sum / 2

	dp := make([]bool, target+1)
	dp[0] = true

	for _, num := range nums {
		for j := target; j >= num; j-- {
			dp[j] = dp[j] || dp[j-num]
		}
	}

	return dp[target]
}

func LongestValidParentheses(s string) int {
	n := len(s)
	if n == 0 {
		return 0
	}

	dp := make([]int, n) // dp[i] 表示以 s[i] 结尾的最长有效括号子串长度
	maxLength := 0

	// 遍历字符串
	for i := 1; i < n; i++ {
		if s[i] == ')' {
			if s[i-1] == '(' {
				// 情况 1: 当前字符和前一个字符形成有效括号对
				dp[i] = 2
				if i-2 >= 0 {
					dp[i] += dp[i-2] // 加上之前有效括号子串的长度
				}
			} else if i-dp[i-1]-1 >= 0 && s[i-dp[i-1]-1] == '(' {
				// 情况 2: 当前字符和前面的有效括号子串形成新的有效括号对子
				dp[i] = dp[i-1] + 2
				if i-dp[i-1]-2 >= 0 {
					dp[i] += dp[i-dp[i-1]-2] // 加上之前有效括号子串的长度
				}
			}
		}
		maxLength = max(maxLength, dp[i]) // 更新最大有效括号子串长度
	}

	return maxLength
}
