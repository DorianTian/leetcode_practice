package classification

func SingleNumber(nums []int) int {
	result := 0

	for _, num := range nums {
		result ^= num
	}

	return result
}
