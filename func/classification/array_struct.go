package classification

import "sort"

func MaxSubArray(nums []int) int {
	maxSum := nums[0]
	currentSum := nums[0]

	for _, num := range nums[1:] {
		currentSum = max(num, currentSum+num)
		maxSum = max(maxSum, currentSum)
	}

	return maxSum
}

func Merge(intervals [][]int) [][]int {
	if len(intervals) <= 1 {
		return intervals
	}

	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	var merged [][]int
	currentMerged := intervals[0]

	for i := 1; i < len(intervals); i++ {
		if intervals[i][0] <= currentMerged[1] {
			currentMerged[1] = max(currentMerged[1], intervals[i][1])
		} else {
			merged = append(merged, currentMerged)
			currentMerged = intervals[i]
		}
	}

	merged = append(merged, currentMerged)
	return merged
}

func Rotate(nums []int, k int) {
	if len(nums) <= k {

	}
	translate := func(nums []int) {
		left, right := 0, len(nums)-1
		for left <= right {
			nums[left], nums[right] = nums[right], nums[left]
			left++
			right--
		}
	}

	k = k % len(nums)
	translate(nums)
	translate(nums[:k])
	translate(nums[k:])
}

func ProductExceptSelf(nums []int) []int {
	prefix := 1
	suffix := 1
	var productList []int

	for _, num := range nums {
		productList = append(productList, prefix)
		prefix *= num
	}

	for i := len(nums) - 1; i >= 0; i-- {
		productList[i] *= suffix
		suffix *= nums[i]
	}

	return productList
}

func FirstMissingPositive(nums []int) int {
	n := len(nums)

	for i := 0; i < n; i++ {
		for nums[i] > 0 && nums[i] < n && nums[nums[i]-1] != nums[i] {
			nums[i], nums[nums[i]-1] = nums[nums[i]-1], nums[i]
		}
	}

	for i := 0; i < n; i++ {
		if nums[i] != i+1 {
			return i + 1
		}
	}

	return n + 1
}

func MergeSortedArray(nums1 []int, m int, nums2 []int, n int) {
	p1 := m - 1
	p2 := n - 1
	p := m + n - 1

	for p1 >= 0 && p2 >= 0 {
		if nums1[p1] <= nums2[p2] {
			nums1[p] = nums2[p2]
			p2--
		} else {
			nums1[p] = nums1[p1]
			p1--
		}

		p--
	}

	for p2 >= 0 {
		nums1[p] = nums2[p2]
		p2--
		p--
	}
}

func RemoveElement(nums []int, val int) int {
	k := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] != val {
			nums[k] = nums[i]
			k++
		}
	}

	return k
}

func RemoveDuplicates(nums []int) int {
	k := 1
	for i := k; i < len(nums); i++ {
		if nums[i] != nums[k-1] {
			nums[k] = nums[i]
			k++
		}
	}

	return k
}

func RemoveDuplicates2(nums []int) int {
	if len(nums) < 2 {
		return len(nums)
	}

	k := 2

	for i := k; i < len(nums); i++ {
		if nums[i] != nums[k-2] {
			nums[k] = nums[i]
			k++
		}
	}

	return k
}

func Rotate(nums []int, k int) {
	traverse := func(nums []int) {
		left, right := 0, len(nums)-1

		for left < right {
			nums[left], nums[right] = nums[right], nums[left]
			left++
			right--
		}
	}

	// [1,2,3,4,5,6,7]
	traverse(nums)
	traverse(nums[:k])
	traverse(nums[k:])
}

func MaxProfit(prices []int) int {
	maxProfit := 0
	minPrice := prices[0]

	for i := 0; i < len(prices); i++ {
		if prices[i] < minPrice {
			minPrice = prices[i]
		} else {
			maxProfit = max(maxProfit, prices[i]-minPrice)
		}
	}

	return maxProfit
}

func MaxProfit2(prices []int) int {
	maxProfit := 0
	for i := 1; i < len(prices); i++ {
		if prices[i] > prices[i-1] {
			maxProfit += prices[i] - prices[i-1]
		}
	}

	return maxProfit
}

func CanJump(nums []int) bool {
	farthest := 0

	for i := 0; i < len(nums); i++ {
		if i > farthest {
			return false
		}

		farthest = max(farthest, i+nums[i])
	}

	return farthest >= len(nums)-1
}

func Jump(nums []int) int {
	if len(nums) <= 1 {
		return 0
	}

	farthest := 0
	jumps := 0
	endJumpPoint := 0

	for i := 0; i < len(nums); i++ {
		farthest = max(farthest, i+nums[i])

		if i == endJumpPoint {
			jumps++
			endJumpPoint = farthest

			if farthest >= len(nums)-1 {
				return jumps
			}
		}
	}

	return jumps
}

func HIndex(citations []int) int {
	counts := make([]int, len(citations)+1)

	for i := 0; i < len(citations); i++ {
		if citations[i] >= len(citations) {
			counts[len(citations)]++
			continue
		}

		counts[citations[i]]++
	}

	total := 0
	for i := len(counts) - 1; i >= 0; i-- {
		total += counts[i]

		if total >= i {
			return i
		}
	}

	return -1
}

func productExceptSelf(nums []int) []int {
	prefix := 1
	suffix := 1
	var product []int

	for _, num := range nums {
		product = append(product, prefix)
		prefix *= num
	}

	for i := len(product) - 1; i >= 0; i-- {
		product[i] = product[i] * suffix
		suffix *= nums[i]
	}

	return product
}

func CanCompleteCircuit(gas []int, cost []int) int {
	totalTank := 0
	currentTank := 0
	startIndex := 0

	for i := 0; i < len(gas); i++ {
		totalTank += gas[i] - cost[i]
		currentTank += gas[i] - cost[i]

		if currentTank < 0 {
			startIndex = i + 1
			currentTank = 0
		}
	}

	if totalTank >= 0 {
		return startIndex
	}

	return -1
}

func Candy(ratings []int) int {
	if len(ratings) == 0 {
		return 0
	}

	totalCandies := 0
	allocations := make([]int, len(ratings))
	for i := 0; i < len(allocations); i++ {
		allocations[i] = 1
	}

	for i := 1; i < len(allocations); i++ {
		if ratings[i] > ratings[i-1] {
			allocations[i] = allocations[i-1] + 1
		}
	}

	for i := len(allocations) - 2; i >= 0; i-- {
		if ratings[i] > ratings[i+1] {
			allocations[i] = max(allocations[i], allocations[i+1]+1)
		}
	}

	for _, num := range allocations {
		totalCandies += num
	}
	return totalCandies
}
