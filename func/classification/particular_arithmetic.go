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

func NextPermutation(nums []int) {
	n := len(nums)

	var reverse func(arr []int, start, end int)
	reverse = func(arr []int, start int, end int) {
		for start < end {
			arr[start], arr[end] = arr[end], arr[start]
			start++
			end--
		}
	}

	i := n - 2
	for i >= 0 && nums[i] >= nums[i+1] {
		i--
	}

	if i >= 0 {
		j := n - 1
		for nums[j] <= nums[i] {
			j--
		}

		nums[i], nums[j] = nums[j], nums[i]
	}

	reverse(nums, i+1, n-1)
}

func FindDuplicate(nums []int) int {
	//low, high := 1, len(nums)-1
	//
	//for low < high {
	//	mid := low + (high-low)/2
	//	count := 0
	//
	//	for _, num := range nums {
	//		if num >= low && num <= mid {
	//			count++
	//		}
	//	}
	//
	//	if count > mid-low+1 {
	//		high = mid
	//	} else {
	//		low = mid + 1
	//	}
	//}
	//
	//return low
	slow := nums[0]
	fast := nums[0]

	for {
		slow = nums[slow]
		fast = nums[nums[fast]]

		if slow == fast {
			break
		}
	}

	slow = nums[0]
	for fast != slow {
		slow = nums[slow]
		fast = nums[fast]
	}

	return slow
}
