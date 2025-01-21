package classification

import "sort"

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
