package classification

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
