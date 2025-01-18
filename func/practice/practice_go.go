package practice

import (
	"fmt"
	"leetcode_practice/func/utils"
	"sort"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func LongestConsecutive(nums []int) int {
	hasIteratedNumber := make(map[int]struct{})
	longest := 0

	for _, num := range nums {
		hasIteratedNumber[num] = struct{}{}
	}

	for num := range hasIteratedNumber {
		if _, exist := hasIteratedNumber[num-1]; !exist {
			current := num
			currentLong := 1

			for {
				if _, nextExist := hasIteratedNumber[current+1]; nextExist {
					currentLong++
					current++
				} else {
					break
				}
			}

			if currentLong > longest {
				longest = currentLong
			}
		}
	}

	fmt.Println(longest)
	return longest
}

func MoveZeroes(nums []int) []int {
	//nonZeroIndex := 0
	//
	//for _, num := range nums {
	//	if num != 0 {
	//		nums[nonZeroIndex] = num
	//		nonZeroIndex++
	//	}
	//}
	//
	//for i := nonZeroIndex; i < len(nums); i++ {
	//	nums[i] = 0
	//}
	//
	//return nums
	left := 0
	for right := 0; right < len(nums); right++ {
		if nums[right] != 0 {
			nums[left], nums[right] = nums[right], nums[left]
			left++
		}
	}

	return nums
}

func MaxArea(height []int) int {
	left, right := 0, len(height)-1
	maxArea := 0

	for left < right {
		currentArea := (right - left) * min(height[left], height[right])

		if currentArea > maxArea {
			maxArea = currentArea
		}

		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}

	return maxArea
}

func ThreeSum(nums []int) [][]int {
	var result [][]int
	//utils.QuickSort(nums, 0, len(nums)-1)
	sort.Ints(nums)

	for i, num := range nums {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		left := i + 1
		right := len(nums) - 1

		for left < right {
			current := nums[left] + nums[right] + num

			if current == 0 {
				result = append(result, []int{num, nums[left], nums[right]})

				for left < right && nums[left] == nums[left+1] {
					left++
				}
				for left < right && nums[right] == nums[right-1] {
					right--
				}

				left++
				right--
			} else if current > 0 {
				right--
			} else {
				left++
			}
		}

	}

	return result
}

func Trap(height []int) int {
	if len(height) == 0 {
		return 0
	}
	trapNumber := 0
	leftMax, rightMax := 0, 0
	left, right := 0, len(height)-1

	for left < right {
		if height[left] < height[right] {
			if height[left] > leftMax {
				leftMax = height[left]
			} else {
				trapNumber += leftMax - height[left]
			}

			left++
		} else {
			if height[right] > rightMax {
				rightMax = height[right]
			} else {
				trapNumber += rightMax - height[right]
			}

			right--
		}
	}

	return trapNumber
}

func LengthOfLongestSubstring(s string) int {
	longestSubstringLen := 0
	hashChar := make(map[byte]int)
	start := 0

	for i := 0; i < len(s); i++ {
		if prevIndex, exit := hashChar[s[i]]; exit && prevIndex >= start {
			start = prevIndex + 1
		}

		hashChar[s[i]] = i
		longestSubstringLen = max(longestSubstringLen, i-start+1)
	}

	return longestSubstringLen
}

func FindAnagrams(s string, p string) []int {
	var anagrams []int
	if len(s) < len(p) {
		return anagrams
	}
	pCount := [26]int{}
	sCount := [26]int{}

	for i := 0; i < len(p); i++ {
		pCount[p[i]-'a']++
		sCount[s[i]-'a']++
	}

	left, right := 0, len(p)-1
	for right < len(s) {
		if pCount == sCount {
			anagrams = append(anagrams, left)
		}

		sCount[s[left]-'a']--
		left++
		right++
		if right < len(s) {
			sCount[s[right]-'a']++
		}
	}

	if pCount == sCount {
		anagrams = append(anagrams, left)
	}

	return anagrams
}

func SubarraySum(nums []int, k int) int {
	count := 0
	prefixSum := 0
	sumMap := make(map[int]int)
	sumMap[0] = 1

	for _, num := range nums {
		prefixSum += num
		if val, exist := sumMap[prefixSum-k]; exist {
			count += val
		}

		sumMap[prefixSum]++
	}

	return count
}

func MaxSlidingWindow(nums []int, k int) []int {
	var result []int
	var dequeue []int

	for i := 0; i < len(nums); i++ {
		if len(dequeue) > 0 && dequeue[0] < i-k+1 {
			dequeue = dequeue[1:]
		}

		for len(dequeue) > 0 && nums[dequeue[len(dequeue)-1]] < nums[i] {
			dequeue = dequeue[:len(dequeue)-1]
		}

		dequeue = append(dequeue, i)

		if i >= k-1 {
			result = append(result, nums[dequeue[0]])
		}
	}

	return result
}

func MinWindow(s string, t string) string {
	tMap := make(map[byte]int)
	for i := 0; i < len(t); i++ {
		tMap[t[i]]++
	}

	windowCount := make(map[byte]int)
	left, right := 0, 0
	minLeft := 0
	minLen := len(s) + 1
	formed := 0
	required := len(tMap)

	for right < len(s) {
		windowCount[s[right]]++

		if windowCount[s[right]] == tMap[s[right]] {
			formed++
		}

		for left <= right && formed == required {
			if minLen > right-left+1 {
				minLen = right - left + 1
				minLeft = left
			}

			windowCount[s[left]]--
			if windowCount[s[left]] < tMap[s[left]] {
				formed--
			}
			left++
		}

		right++
	}

	if minLen == len(s)+1 {
		return ""
	}
	return s[minLeft : minLeft+minLen]
}

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

func SetZeroes(matrix [][]int) [][]int {
	firstRow := false
	firstCol := false

	for i := 0; i < len(matrix); i++ {
		if matrix[i][0] == 0 {
			firstCol = true
			break
		}
	}

	for i := 0; i < len(matrix[0]); i++ {
		if matrix[0][i] == 0 {
			firstRow = true
			break
		}
	}

	for i := 1; i < len(matrix); i++ {
		for j := 1; j < len(matrix[0]); j++ {
			if matrix[i][j] == 0 {
				matrix[i][0] = 0
				matrix[0][j] = 0
			}
		}
	}

	for i := 1; i < len(matrix); i++ {
		for j := 1; j < len(matrix[0]); j++ {
			if matrix[i][0] == 0 || matrix[0][j] == 0 {
				matrix[i][j] = 0
			}
		}
	}

	if firstRow {
		for i := 0; i < len(matrix[0]); i++ {
			matrix[0][i] = 0
		}
	}

	if firstCol {
		for i := 0; i < len(matrix); i++ {
			matrix[i][0] = 0
		}
	}

	return matrix
}

func SpiralOrder(matrix [][]int) []int {
	var result []int

	top := 0
	bottom := len(matrix) - 1
	left := 0
	right := len(matrix[0]) - 1

	for top <= bottom && left <= right {
		for col := left; col <= right; col++ {
			result = append(result, matrix[top][col])
		}

		top++

		for row := top; row <= bottom; row++ {
			result = append(result, matrix[row][right])
		}

		right--

		if top <= bottom {
			for col := right; col >= left; col-- {
				result = append(result, matrix[bottom][col])
			}

			bottom--
		}

		if left <= right {
			for row := bottom; row >= top; row-- {
				result = append(result, matrix[row][left])
			}

			left++
		}
	}

	return result
}

func RotateMatrix(matrix [][]int) [][]int {
	cols := len(matrix[0])

	// transpose matrix
	for i := 0; i < len(matrix); i++ {
		for j := i + 1; j < cols; j++ {
			matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
		}
	}

	for i := 0; i < len(matrix); i++ {
		for j := 0; j < cols/2; j++ {
			matrix[i][j], matrix[i][cols-j-1] = matrix[i][cols-j-1], matrix[i][j]
		}
	}

	return matrix
}

func SearchMatrix(matrix [][]int, target int) bool {
	rows := len(matrix)
	cols := len(matrix[0])

	row, col := 0, cols-1

	for row < rows && col >= 0 {
		if matrix[row][col] == target {
			return true
		} else if matrix[row][col] > target {
			col--
		} else {
			row++
		}
	}

	return false
}

func GetIntersectionNode(headA, headB *utils.ListNode) *utils.ListNode {
	// 检查链表是否为空
	if headA == nil || headB == nil {
		return nil
	}

	// 初始化两个指针
	pA, pB := headA, headB

	// 遍历两个链表
	for pA != pB {
		// 如果 pA 到达链表末尾，则切换到链表 B 的头节点
		if pA == nil {
			pA = headB
		} else {
			pA = pA.Next
		}

		// 如果 pB 到达链表末尾，则切换到链表 A 的头节点
		if pB == nil {
			pB = headA
		} else {
			pB = pB.Next
		}
	}

	// 返回交点节点（如果没有交点，则 pA 和 pB 最终都会为 nil）
	return pA
}

func ReverseList(head *utils.ListNode) *utils.ListNode {
	var prev *utils.ListNode
	current := head

	for current != nil {
		next := current.Next
		current.Next = prev
		prev = current
		current = next
	}

	return prev
}
