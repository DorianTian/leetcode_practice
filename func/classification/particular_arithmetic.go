package classification

func SingleNumber(nums []int) int {
	result := 0

	for _, num := range nums {
		result ^= num
	}

	return result
}

func MajorityElement(nums []int) int {
	candidate := -1
	count := 0

	for _, num := range nums {
		if count == 0 {
			candidate = num
		}

		if num == candidate {
			count++
		} else {
			count--
		}
	}

	return candidate
}

func SortColors(nums []int) {
	low, mid, high := 0, 0, len(nums)-1

	for mid <= high {
		switch nums[mid] {
		case 0:
			nums[low], nums[mid] = nums[mid], nums[low]
			low++
			mid++

		case 1:
			mid++

		case 2:
			nums[mid], nums[high] = nums[high], nums[mid]
			high--
		}
	}
}
