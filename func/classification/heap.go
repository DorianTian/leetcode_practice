package classification

func buildMaxHeap(nums []int, index int) {
	left, right := index*2+1, index*2+2
	maxIndex := index

	if left < len(nums) && nums[left] > nums[maxIndex] {
		maxIndex = left
	}

	if right < len(nums) && nums[right] > nums[maxIndex] {
		maxIndex = right
	}

	if maxIndex != index {
		nums[index], nums[maxIndex] = nums[maxIndex], nums[index]
		buildMaxHeap(nums, maxIndex)
	}
}

func heapify(nums []int) {
	size := len(nums)

	for i := size/2 - 1; i >= 0; i-- {
		buildMaxHeap(nums, i)
	}
}

func FindKthLargest(nums []int, k int) int {
	heapify(nums)

	for i := 0; i < k-1; i++ {
		nums[0], nums[len(nums)-1-i] = nums[len(nums)-1-i], nums[0]
		buildMaxHeap(nums[:len(nums)-1-i], 0)
	}

	return nums[0]
}
