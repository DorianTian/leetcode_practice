package classification

import "sort"

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

func LetterCombinations(digits string) []string {
	if digits == "" {
		return nil
	}

	strDigits := []rune(digits)
	var result []string
	phoneMap := map[rune]string{
		'2': "abc",
		'3': "def",
		'4': "ghi",
		'5': "jkl",
		'6': "mno",
		'7': "pqrs",
		'8': "tuv",
		'9': "wxyz",
	}

	var backtrack func(start int, current string)
	backtrack = func(start int, current string) {
		if start == len(digits) {
			result = append(result, current)
			return
		}

		letters := phoneMap[strDigits[start]]
		for _, letter := range letters {
			backtrack(start+1, current+string(letter))
		}
	}

	backtrack(0, "")

	return result
}

func CombinationSum(candidates []int, target int) [][]int {
	var result [][]int
	var currentCombination []int
	var backtrack func(start int, remainTarget int)

	backtrack = func(start int, remainTarget int) {
		if remainTarget == 0 {
			result = append(result, append([]int(nil), currentCombination...))
			return
		}

		for i := start; i < len(candidates); i++ {
			if candidates[i] > remainTarget {
				break
			}

			currentCombination = append(currentCombination, candidates[i])
			backtrack(i, remainTarget-candidates[i])
			currentCombination = currentCombination[:len(currentCombination)-1]
		}
	}

	sort.Ints(candidates)
	backtrack(0, target)

	return result
}
