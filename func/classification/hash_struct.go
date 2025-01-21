package classification

import "fmt"

func TwoSum(nums []int, target int) []int {
	deductedMap := make(map[int]int)

	for i, num := range nums {
		deducted := target - num

		if value, found := deductedMap[deducted]; found {
			return []int{i, value}
		}

		deductedMap[num] = i
	}

	return nil
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

	return longest
}

func GroupAnagrams(stirs []string) [][]string {
	resultMap := make(map[string][]string)

	for _, str := range stirs {
		charFrequency := make([]int, 26)

		for _, char := range str {
			charFrequency[char-'a']++
		}

		key := fmt.Sprintf("%d", charFrequency)

		if value, found := resultMap[key]; found {
			resultMap[key] = append(value, str)
		} else {
			resultMap[key] = []string{str}
		}
	}

	var result [][]string
	for _, str := range resultMap {
		result = append(result, str)
	}

	return result
}
