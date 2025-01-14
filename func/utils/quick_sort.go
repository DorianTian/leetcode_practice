package utils

func swap(nums []int, left, right int) {
	temp := nums[left]
	nums[left] = nums[right]
	nums[right] = temp
}

func partition(nums []int, left, right int) int {
	pivot := nums[right]
	i := left - 1

	for j := left; j <= right; j++ {
		if nums[j] < pivot {
			i++
			swap(nums, i, j)
		}
	}

	swap(nums, i+1, right)

	return i + 1
}

func QuickSort(nums []int, left, right int) {
	if left >= right {
		return
	}
	q := partition(nums, left, right)

	if q > left {
		QuickSort(nums, left, q-1)
	}

	if q < right {
		QuickSort(nums, q+1, right)
	}
}
