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
