package classification

func permute(nums []int) [][]int {
	var result [][]int
	var temp []int
	var backtrack func([]int)
	backtrack = func(nums []int) {
		if len(temp) == len(nums) {
			copyTemp := make([]int, len(temp))
			copy(copyTemp, temp)
			result = append(result, copyTemp)
			return
		}

		for i := 0; i < len(nums); i++ {
			found := false
			for _, v := range temp {
				if v == nums[i] {
					found = true
					break
				}
			}

			if found {
				continue
			}

			temp = append(temp, nums[i])
			backtrack(nums)
			temp = temp[:len(temp)-1]
		}
	}

	backtrack(nums)
	return result
}

func subsets(nums []int) [][]int {
	var result [][]int
	var currentSubset []int

	var backtrack func(start int)
	backtrack = func(start int) {
		subsetCopy := append([]int(nil), currentSubset...)
		result = append(result, subsetCopy)

		for i := start; i < len(nums); i++ {
			currentSubset = append(currentSubset, nums[i])
			backtrack(i + 1)
			currentSubset = currentSubset[:len(currentSubset)-1]
		}
	}

	backtrack(0)

	return result
}
